import { resolve, fmtLong, toISO, toDate } from '../dates.js';
import { dayStack, topicsForDay, sectionDetail, labMissing } from '../derive.js';
import { renderMarkdown } from '../md.js';
import { renderChecklistItem } from '../components/checklistItem.js';
import { openDrawer } from '../components/detailDrawer.js';
import { termPressure, weekPressure } from '../pressure.js';
import { pressureBar } from '../components/pressureBar.js';
import { getLedger } from '../state.js';

let previewIso = null;

async function openItemDetail(item) {
  const { body, dup } = await sectionDetail(item);
  const wrap = document.createElement('div');
  if (body) {
    if (dup) {
      const w = document.createElement('div');
      w.className = 'dup-note';
      w.textContent = `⚠ duplicate '## ${item.source}' headers in ${item.course}-W${item.week} — check manifest`;
      wrap.append(w);
    }
    const md = document.createElement('div');
    md.className = 'md-content';
    md.innerHTML = renderMarkdown(body);
    wrap.append(md);
  } else {
    wrap.innerHTML = '<div class="error-note">Content not available</div>';
  }
  openDrawer({
    title: item.label || item.section || 'Item',
    subtitle: `${item.course} · W${item.week} · ${item.section}`,
    content: wrap,
  });
}

function phaseLabel(phase) {
  switch (phase) {
    case 'pre-semester':
      return 'Pre-semester';
    case 'final-revision':
      return 'Final revision';
    case 'exam-window':
      return 'Exam window';
    case 'post-exam':
      return 'Term complete';
    default:
      return phase;
  }
}

function stackBlock(block) {
  const row = document.createElement('div');
  row.className = 'stack-block';
  const badge = document.createElement('span');
  badge.className = `badge badge-${block.prio.toLowerCase()}`;
  badge.textContent = block.prio;
  row.append(badge);
  const label = document.createElement('span');
  label.textContent = block.course ? `${block.display} (${block.course})` : block.display;
  row.append(label);
  const min = document.createElement('span');
  min.className = 'stack-min';
  min.textContent = `${block.minutes}m`;
  row.append(min);
  return row;
}

function chip(text, href) {
  const a = document.createElement('a');
  a.className = 'chip';
  a.href = href;
  a.textContent = text;
  return a;
}

function datePreviewControls(ctx, target) {
  const controls = document.createElement('div');
  controls.className = 'date-preview-row';
  const input = document.createElement('input');
  input.type = 'date';
  input.className = 'date-preview';
  input.value = previewIso || toISO(target);
  input.setAttribute('aria-label', 'Preview date');
  input.addEventListener('change', () => {
    previewIso = input.value || null;
    const view = document.getElementById('view') || controls.parentElement;
    if (view) renderToday(view, ctx);
  });
  const todayBtn = document.createElement('button');
  todayBtn.type = 'button';
  todayBtn.className = 'chip';
  todayBtn.textContent = 'Today';
  todayBtn.addEventListener('click', () => {
    previewIso = null;
    const view = document.getElementById('view') || controls.parentElement;
    if (view) renderToday(view, ctx);
  });
  controls.append(input, todayBtn);
  return controls;
}

export async function renderToday(host, ctx) {
  host.textContent = '';
  const term = ctx.term;
  const target = previewIso ? toDate(previewIso) : new Date();
  const r = resolve(target, term);

  const header = document.createElement('div');
  header.className = 'view-header';
  const title = document.createElement('div');
  title.className = 'view-title';
  title.textContent = 'Today';
  const sub = document.createElement('div');
  sub.className = 'view-sub';
  sub.textContent = phaseLabel(r.phase);
  header.append(title, sub);
  host.append(header);

  host.append(datePreviewControls(ctx, target));

  if (r.phase === 'pre-semester') {
    const cd = document.createElement('div');
    cd.className = 'countdown';
    const num = document.createElement('div');
    num.className = 'countdown-num';
    num.textContent = r.days_until_start;
    const unit = document.createElement('div');
    unit.className = 'countdown-unit';
    unit.textContent = 'days';
    const label = document.createElement('div');
    label.className = 'countdown-label';
    label.textContent = 'until the semester starts · Mon 17 Aug 2026';
    cd.append(num, unit, label);
    host.append(cd);
    const chips = document.createElement('div');
    chips.className = 'chip-row';
    chips.append(chip('Preview Week 1', '#/week/1'));
    host.append(chips);
    return;
  }

  if (r.phase !== 'teaching') {
    const note = document.createElement('div');
    note.className = 'status-note';
    if (r.phase === 'final-revision') note.textContent = `Final revision week (W${r.week})`;
    else if (r.phase === 'exam-window') note.textContent = 'Exam window — 30 Nov to 18 Dec';
    else note.textContent = 'Term complete';
    host.append(note);
    return;
  }

  title.textContent = `Today — ${fmtLong(target)}`;
  sub.textContent = `Week ${r.week} · ${r.weekday}`;

  if (r.variant === 'wk8-exam') {
    const b = document.createElement('span');
    b.className = 'badge badge-variant';
    b.textContent = 'Exam week';
    header.append(b);
  } else if (r.variant === 'wk9-recovery') {
    const b = document.createElement('span');
    b.className = 'badge badge-variant';
    b.textContent = 'Recovery';
    header.append(b);
  }
  if (r.off) {
    const b = document.createElement('span');
    b.className = 'badge badge-off';
    b.textContent = 'Off';
    header.append(b);
  }

  const bars = document.createElement('div');
  bars.className = 'pressure-bars';
  bars.append(pressureBar('Term pressure', termPressure(target, term)));
  bars.append(pressureBar(`Week ${r.week} progress`, weekPressure(target, r.week, term)));
  host.append(bars);

  const ledger = getLedger();
  const owedPositive = Object.keys(ledger)
    .map((c) => ({ c, owed: (ledger[c] && ledger[c].owed) || 0 }))
    .filter((e) => e.owed > 0)
    .sort((a, b) => b.owed - a.owed);
  if (owedPositive.length) {
    const note = document.createElement('div');
    note.className = 'status-note warn-note';
    note.textContent = '⚠ ledger: ' + owedPositive.map((e) => `${e.c} ${e.owed}h owed`).join(', ') +
      ' (bars show time, not completion)';
    host.append(note);
  }

  if (r.off && r.note) {
    const note = document.createElement('div');
    note.className = 'off-note';
    note.textContent = r.note;
    host.append(note);
  }

  const stack = dayStack(r.week, r.weekday, term);
  if (r.weekday === 'Sun' && !stack.blocks.length) {
    const note = document.createElement('div');
    note.className = 'status-note';
    note.textContent = 'Light review + ledger';
    host.append(note);
  } else if (stack.blocks.length) {
    const card = document.createElement('div');
    card.className = 'card';
    const cardTitle = document.createElement('div');
    cardTitle.className = 'card-title';
    cardTitle.textContent = "Today's stack";
    const stackEl = document.createElement('div');
    stackEl.className = 'stack';
    for (const b of stack.blocks) stackEl.append(stackBlock(b));
    card.append(cardTitle, stackEl);
    host.append(card);
  }

  const section = document.createElement('div');
  section.className = 'view-section';
  const sectionTitle = document.createElement('div');
  sectionTitle.className = 'section-title';
  sectionTitle.textContent = 'Tasks';
  section.append(sectionTitle);

  const dateISO = toISO(target);
  const items = await topicsForDay(r.week, r.weekday, term);
  if (!items.length) {
    const empty = document.createElement('div');
    empty.className = 'empty';
    empty.textContent = 'No scheduled tasks for today.';
    section.append(empty);
  } else {
    for (const item of items) {
      section.append(renderChecklistItem(item, { onDetail: openItemDetail, date: dateISO }));
    }
  }
  host.append(section);

  if (r.weekday === 'Sat') {
    for (const c of term.courses || []) {
      if (!(await labMissing(c, r.week, term))) continue;
      const lb = (term.lab_stack || []).find((l) => l.course === c);
      const note = document.createElement('div');
      note.className = 'lab-note';
      note.textContent = `${lb ? lb.label : c} — no lab this week`;
      host.append(note);
    }
  }

  const chips = document.createElement('div');
  chips.className = 'chip-row';
  chips.append(chip(`Open Week ${r.week}`, `#/week/${r.week}`));
  chips.append(chip('Progress', '#/progress'));
  host.append(chips);
}
