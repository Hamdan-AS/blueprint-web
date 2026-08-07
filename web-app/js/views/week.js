import { weekDateRange, fmtShort, addDays, variantFor, WEEKDAY_NAMES, toISO } from '../dates.js';
import { dayStack, topicsForDay, sectionDetail, getTotalsAll } from '../derive.js';
import { COURSES } from '../ids.js';
import { renderMarkdown } from '../md.js';
import { navigate } from '../router.js';
import { renderChecklistItem } from '../components/checklistItem.js';
import { openDrawer } from '../components/detailDrawer.js';
import { renderWeekHeatmap } from '../components/weekHeatmap.js';

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

export async function renderWeek(host, week, ctx) {
  host.textContent = '';
  const term = ctx.term;
  week = Math.max(1, Math.min(15, week));

  const header = document.createElement('div');
  header.className = 'view-header';
  const title = document.createElement('div');
  title.className = 'view-title';
  title.textContent = `Week ${week}`;
  const sub = document.createElement('div');
  sub.className = 'view-sub';
  const range = weekDateRange(week, term);
  sub.textContent = `${fmtShort(range.start)} – ${fmtShort(range.end)}`;
  header.append(title, sub);
  host.append(header);

  const chips = document.createElement('div');
  chips.className = 'chip-row';
  for (let n = 1; n <= 14; n++) {
    const chip = document.createElement('a');
    chip.className = `chip${n === week ? ' active' : ''}`;
    chip.href = `#/week/${n}`;
    chip.textContent = String(n);
    chips.append(chip);
  }
  const rev = document.createElement('a');
  rev.className = `chip${week === 15 ? ' active' : ''}`;
  rev.href = '#/week/15';
  rev.textContent = '15 · Rev';
  chips.append(rev);
  host.append(chips);

  if (week <= 14) {
    const grid = document.createElement('div');
    grid.className = 'day-grid';
    for (let i = 1; i <= 7; i++) {
      const weekday = WEEKDAY_NAMES[i];
      const date = addDays(range.start, i - 1);
      const stack = dayStack(week, weekday, term);

      const card = document.createElement('div');
      card.className = 'day-card';

      const head = document.createElement('div');
      head.className = 'day-head';
      const dayTitle = document.createElement('span');
      dayTitle.className = 'day-title';
      dayTitle.textContent = weekday;
      const dayDate = document.createElement('span');
      dayDate.className = 'day-date';
      dayDate.textContent = fmtShort(date);
      head.append(dayTitle, dayDate);

      const variant = variantFor(term, week);
      if (variant === 'wk8-exam') {
        const b = document.createElement('span');
        b.className = 'badge badge-variant';
        b.textContent = 'Exam';
        head.append(b);
      } else if (variant === 'wk9-recovery') {
        const b = document.createElement('span');
        b.className = 'badge badge-variant';
        b.textContent = 'Recovery';
        head.append(b);
      }
      if (stack.off) {
        const b = document.createElement('span');
        b.className = 'badge badge-off';
        b.textContent = 'Off';
        head.append(b);
      }
      card.append(head);

      if (weekday === 'Sun' && !stack.courses.length) {
        const note = document.createElement('div');
        note.className = 'status-note';
        note.textContent = 'Light review + ledger';
        card.append(note);
      }
      if (stack.off) {
        const note = document.createElement('div');
        note.className = 'off-note';
        note.textContent = stack.note;
        card.append(note);
      }
      if (stack.blocks.length) {
        const stackEl = document.createElement('div');
        stackEl.className = 'stack';
        for (const b of stack.blocks) stackEl.append(stackBlock(b));
        card.append(stackEl);
      }

      const items = await topicsForDay(week, weekday, term);
      if (items.length) {
        for (const item of items) card.append(renderChecklistItem(item, { onDetail: openItemDetail, date: toISO(date) }));
      } else {
        const empty = document.createElement('div');
        empty.className = 'empty';
        empty.textContent = 'No scheduled tasks.';
        card.append(empty);
      }
      grid.append(card);
    }
    host.append(grid);
  }

  const heatSection = document.createElement('div');
  heatSection.className = 'view-section';
  const heatTitle = document.createElement('div');
  heatTitle.className = 'section-title';
  heatTitle.textContent = 'Term heatmap';
  heatSection.append(heatTitle);
  const heatHost = document.createElement('div');
  heatSection.append(heatHost);
  host.append(heatSection);
  await renderWeekHeatmap(heatHost, {
    term,
    completed: ctx.completed,
    onSelect: (c, w) => navigate(`#/week/${w}`),
  });

  const progSection = document.createElement('div');
  progSection.className = 'view-section';
  const progTitle = document.createElement('div');
  progTitle.className = 'section-title';
  progTitle.textContent = 'Week progress';
  progSection.append(progTitle);

  const totals = await getTotalsAll(term, ctx.completed);
  for (const code of term.courses) {
    const t = totals.get(`${code}-W${week}`);
    if (!t || t.total === 0) continue;
    const meta = COURSES[code];
    const row = document.createElement('div');
    row.className = 'course-row';
    const dot = document.createElement('span');
    dot.className = 'course-dot';
    dot.style.setProperty('--dot', meta.accent);
    const name = document.createElement('span');
    name.className = 'course-name';
    name.textContent = meta.name;
    const barWrap = document.createElement('div');
    barWrap.className = 'progress-bar';
    const fill = document.createElement('div');
    fill.className = 'progress-fill';
    fill.style.width = `${t.total ? Math.round((t.done / t.total) * 100) : 0}%`;
    barWrap.append(fill);
    const num = document.createElement('span');
    num.className = 'progress-num';
    num.textContent = `${t.done}/${t.total}`;
    row.append(dot, name, barWrap, num);
    progSection.append(row);
  }
  host.append(progSection);
}
