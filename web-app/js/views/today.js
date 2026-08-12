import { addDays, resolve, fmtLong, toISO, toDate } from '../dates.js';
import { dayStack, materialForBlock } from '../derive.js';
import { renderMarkdown, decorateMarkdown } from '../md.js';
import { renderTaskBlock } from '../components/taskBlock.js';
import { openDrawer } from '../components/detailDrawer.js';
import { termPressure, weekPressure } from '../pressure.js';
import { pressureBar } from '../components/pressureBar.js';
import { renderStudySession } from '../components/studySession.js';
import { completePack, completeReview, getLedger, getState, isBlockDone, reviewsDue } from '../state.js';

let previewIso = null;
const el = (tag, cls, text) => { const node = document.createElement(tag); if (cls) node.className = cls; if (text != null) node.textContent = text; return node; };
function link(text, href) { const node = el('a', 'chip', text); node.href = href; return node; }

function greeting(date) {
  const hour = date.getHours();
  return hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
}

async function openDetail(block, week, weekday, term) {
  const wrap = el('div', 'task-detail');
  wrap.append(el('p', 'task-detail-lead', `${block.prio} · ${block.minutes} minutes · #${block.id}`));
  wrap.append(renderStudySession(block));
  const material = await materialForBlock(block, week, weekday, term);
  if (!material.length) wrap.append(el('div', 'empty', 'No bundled manifest material for this block.'));
  for (const item of material) {
    wrap.append(el('h3', null, `${item.course} · ${item.section}`));
    if (item.duplicate) wrap.append(el('div', 'dup-note', `Duplicate “${item.section}” section detected.`));
    const md = el('div', 'md-content'); md.innerHTML = renderMarkdown(item.body); decorateMarkdown(md, item.path); wrap.append(md);
  }
  openDrawer({ title: block.display, subtitle: `${weekday} · Week ${week}`, content: wrap });
}

function dateControls(ctx, target) {
  const row = el('div', 'date-preview-row');
  const move = (days, label, symbol) => {
    const button = el('button', 'date-step', symbol); button.type = 'button'; button.setAttribute('aria-label', label);
    button.addEventListener('click', () => { previewIso = toISO(addDays(target, days)); renderToday(document.getElementById('view'), ctx); });
    return button;
  };
  const input = el('input', 'date-preview'); input.type = 'date'; input.value = previewIso || toISO(target); input.setAttribute('aria-label', 'Preview date');
  input.addEventListener('change', () => { previewIso = input.value || null; renderToday(document.getElementById('view'), ctx); });
  const today = el('button', 'chip', 'Today'); today.type = 'button';
  today.addEventListener('click', () => { previewIso = null; renderToday(document.getElementById('view'), ctx); });
  row.append(move(-1, 'Previous day', '←'), input, move(1, 'Next day', '→'), today); return row;
}

function focusCard(block, remaining, onOpen) {
  const card = el('section', 'focus-card');
  const copy = el('div', 'focus-copy');
  copy.append(el('span', 'focus-kicker', 'Next up'), el('h2', 'focus-title', block.display),
    el('p', 'focus-meta', `${block.course === 'rev' ? 'Review' : block.course === '-' ? 'Recovery' : block.course} · ${block.minutes} min · ${remaining} task${remaining === 1 ? '' : 's'} left`));
  const action = el('button', 'focus-action', 'Open material'); action.type = 'button'; action.addEventListener('click', onOpen);
  card.append(copy, action); return card;
}

function preSemesterGuide(term) {
  const section = el('section', 'getting-started');
  section.append(el('div', 'section-eyebrow', 'Set yourself up once'), el('h2', 'getting-started-title', 'Start semester one step ahead'));
  const grid = el('div', 'start-grid');
  const actions = [
    ['01', 'Preview week one', 'See the exact daily workload before classes begin.', '#/week/1'],
    ['02', 'Know your courses', `Browse the key books for all ${term.courses.length} courses.`, '#/course'],
    ['03', 'Read the strategy', 'Use the shared plan when the semester gets noisy.', '#/shared'],
  ];
  for (const [number, title, copy, href] of actions) {
    const card = el('a', 'start-card'); card.href = href;
    card.append(el('span', 'start-number', number), el('strong', null, title), el('span', null, copy), el('span', 'start-arrow', '→'));
    grid.append(card);
  }
  section.append(grid); return section;
}

function summary(plan, dateISO) {
  const done = plan.blocks.filter((block) => isBlockDone(dateISO, block.id));
  const totalMinutes = plan.blocks.reduce((sum, block) => sum + block.minutes, 0);
  const doneMinutes = done.reduce((sum, block) => sum + block.minutes, 0);
  const wrap = el('div', 'today-summary'); const copy = el('div');
  copy.append(el('strong', null, `${done.length}/${plan.blocks.length} tasks`), el('span', 'view-sub', `${doneMinutes} of ${totalMinutes} minutes complete`));
  const pct = Math.round(done.length / plan.blocks.length * 100);
  const bar = el('div', 'progress-bar'); bar.setAttribute('role', 'progressbar'); bar.setAttribute('aria-label', 'Today completion'); bar.setAttribute('aria-valuenow', pct);
  const fill = el('div', 'progress-fill'); fill.style.width = `${pct}%`; bar.append(fill); wrap.append(copy, bar); return wrap;
}

function ledgerNotice() {
  const owed = Object.entries(getLedger()).map(([course, item]) => ({ course, value: item?.owed || 0 }))
    .filter((item) => item.value > 0).sort((a, b) => b.value - a.value);
  return owed.length ? el('div', 'status-note warn-note', `Ledger debt: ${owed.map((item) => `${item.course} ${item.value.toFixed(2)}h`).join(' · ')}`) : null;
}

function reviewRow(pack, dateISO, ctx, early) {
  const row = el('div', 'review-card'); const copy = el('div');
  const label = pack.next_review < dateISO ? `Overdue since ${pack.next_review}` : pack.next_review === dateISO ? 'Due today' : `Due ${pack.next_review}`;
  copy.append(el('strong', null, pack.id), el('span', 'view-sub', `${label} · review ${pack.review_count}`));
  const button = el('button', 'chip', early ? 'Review early' : 'Complete review'); button.type = 'button';
  button.addEventListener('click', async () => {
    if (early && !confirm('Complete this review early? Its next interval will start today.')) return;
    button.disabled = true; await completeReview(pack.id, dateISO); renderToday(document.getElementById('view'), ctx);
  });
  row.append(copy, button); return row;
}

function reviewSection(dateISO, ctx) {
  const due = reviewsDue(dateISO); const upcoming = reviewsDue(dateISO, true).filter((pack) => pack.next_review > dateISO).slice(0, 1);
  if (!due.length && !upcoming.length) return null;
  const section = el('section', 'view-section'); section.append(el('h2', 'section-title', due.length ? 'Reviews due' : 'Next review'));
  for (const pack of due) section.append(reviewRow(pack, dateISO, ctx, false));
  for (const pack of upcoming) section.append(reviewRow(pack, dateISO, ctx, true));
  return section;
}

function packSection(plan, week, dateISO, ctx) {
  const courses = [...new Set(plan.blocks.map((block) => block.course).filter((course) => course && !['rev', '-'].includes(course)))];
  if (!courses.length) return null;
  const section = el('section', 'view-section'); section.append(el('h2', 'section-title', 'Weekly packs'));
  for (const course of courses) {
    const id = `${course}-W${week}`; const saved = getState().packs[id];
    const row = el('div', 'pack-row'); const copy = el('div');
    copy.append(el('strong', null, id), el('span', 'view-sub', saved ? `Completed ${saved.completed} · next review ${saved.next_review || 'finished'}` : 'Complete after retrieving the pack without notes'));
    const button = el('button', `chip${saved ? ' completed-chip' : ''}`, saved ? 'Completed' : 'Mark mastered'); button.type = 'button'; button.disabled = !!saved;
    button.addEventListener('click', async () => { button.disabled = true; await completePack(course, week, dateISO); renderToday(document.getElementById('view'), ctx); });
    row.append(copy, button); section.append(row);
  }
  return section;
}

export async function renderToday(host, ctx) {
  host.textContent = '';
  const target = previewIso ? toDate(previewIso) : new Date(); const dateISO = toISO(target); const resolved = resolve(target, ctx.term);
  const header = el('header', 'view-header');
  header.append(el('span', 'page-eyebrow', resolved.phase === 'teaching' ? `Week ${resolved.week} · ${fmtLong(target)}` : fmtLong(target)),
    el('h1', 'view-title', resolved.phase === 'teaching' ? greeting(target) : 'Your semester blueprint'),
    el('p', 'view-sub', resolved.phase === 'teaching' ? 'One focused block at a time. The plan has already done the deciding.' : resolved.phase.replace('-', ' ')));
  if (resolved.variant === 'wk8-exam') header.append(el('span', 'badge badge-variant', 'Exam week'));
  if (resolved.variant === 'wk9-recovery') header.append(el('span', 'badge badge-variant', 'Recovery'));
  host.append(header, dateControls(ctx, target));
  if (resolved.phase === 'pre-semester') {
    const countdown = el('div', 'countdown'); countdown.append(el('div', 'countdown-num', resolved.days_until_start), el('div', 'countdown-unit', 'days'), el('div', 'countdown-label', `until ${ctx.term.name} starts`));
    host.append(countdown, preSemesterGuide(ctx.term)); return;
  }
  if (resolved.phase !== 'teaching') {
    host.append(el('div', 'status-note', resolved.phase === 'final-revision' ? 'Final revision: work reviews and the Master Error Log.' : resolved.phase === 'exam-window' ? 'Exam window: follow the exam strategy.' : 'Term complete.'));
    const reviews = reviewSection(dateISO, ctx); if (reviews) host.append(reviews); return;
  }
  const bars = el('div', 'pressure-bars'); bars.append(pressureBar('Teaching time elapsed', termPressure(target, ctx.term)), pressureBar(`Week ${resolved.week} elapsed`, weekPressure(target, resolved.week, ctx.term))); host.append(bars);
  const debt = ledgerNotice(); if (debt) host.append(debt);
  const plan = dayStack(resolved.week, resolved.weekday, ctx.term);
  if (plan.off) { host.append(el('div', 'off-note', plan.note || 'Calendar override: off day.')); return; }
  if (plan.kind === 'ledger_catchup') host.append(el('div', 'status-note', 'Light review and ledger catch-up. Clear the highest owed course first.'));
  if (plan.blocks.length) {
    host.append(summary(plan, dateISO));
    const incomplete = plan.blocks.filter((block) => !isBlockDone(dateISO, block.id));
    if (incomplete.length) host.append(focusCard(incomplete[0], incomplete.length,
      () => openDetail(incomplete[0], resolved.week, resolved.weekday, ctx.term)));
    else host.append(el('div', 'day-complete', 'Day complete · give your brain a proper stop signal.'));
    const section = el('section', 'view-section task-section'); section.append(el('h2', 'section-title', 'Day stack')); let next = false;
    for (const prio of ['P0', 'P1', 'P2']) {
      const blocks = plan.blocks.filter((block) => block.prio === prio); if (!blocks.length) continue;
      const group = el(prio === 'P2' ? 'details' : 'div', `task-group${prio === 'P2' ? ' optional-group' : ''}`);
      const groupTitle = el(prio === 'P2' ? 'summary' : 'h3', 'task-group-title', prio === 'P0' ? 'Must do · P0' : prio === 'P1' ? 'Should do · P1' : `If time · P2 · ${blocks.length} optional`);
      group.append(groupTitle);
      if (prio === 'P2' && incomplete[0]?.prio === 'P2') group.open = true;
      for (const block of blocks) {
        const row = renderTaskBlock(block, { date: dateISO, blocks: plan.blocks,
          onDetail: () => openDetail(block, resolved.week, resolved.weekday, ctx.term),
          onChanged: () => renderToday(document.getElementById('view'), ctx) });
        if (!next && !isBlockDone(dateISO, block.id)) { row.classList.add('next-task'); next = true; }
        group.append(row);
      }
      section.append(group);
    }
    host.append(section);
  }
  const reviews = reviewSection(dateISO, ctx); if (reviews) host.append(reviews);
  const packs = packSection(plan, resolved.week, dateISO, ctx); if (packs) host.append(packs);
  const links = el('div', 'chip-row'); links.append(link(`Open Week ${resolved.week}`, `#/week/${resolved.week}`), link('Progress', '#/progress')); host.append(links);
}
