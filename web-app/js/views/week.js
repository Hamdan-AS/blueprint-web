import { addDays, fmtShort, toISO, weekDateRange, WEEKDAY_NAMES } from '../dates.js';
import { dayStack, materialForBlock } from '../derive.js';
import { completionByDay } from '../analytics.js';
import { getState, isBlockDone } from '../state.js';
import { renderTaskBlock } from '../components/taskBlock.js';
import { renderMarkdown, decorateMarkdown } from '../md.js';
import { openDrawer } from '../components/detailDrawer.js';
import { renderWeekHeatmap } from '../components/weekHeatmap.js';
import { renderStudySession } from '../components/studySession.js';
const el = (tag, cls, text) => { const node = document.createElement(tag); if (cls) node.className = cls; if (text != null) node.textContent = text; return node; };

async function openDetail(block, week, weekday, term) {
  const content = el('div', 'task-detail'); content.append(renderStudySession(block)); const material = await materialForBlock(block, week, weekday, term);
  if (!material.length) content.append(el('div', 'empty', 'No bundled material for this block.'));
  for (const item of material) { content.append(el('h3', null, `${item.course} · ${item.section}`)); const md = el('div', 'md-content'); md.innerHTML = renderMarkdown(item.body); decorateMarkdown(md, item.path); content.append(md); }
  openDrawer({ title: block.display, subtitle: `${weekday} · Week ${week}`, content });
}

export async function renderWeek(host, requested, ctx) {
  host.textContent = ''; const term = ctx.term; const week = Math.max(1, Math.min(term.calendar.final_revision_week, requested)); const range = weekDateRange(week, term);
  const header = el('header', 'view-header'); header.append(el('h1', 'view-title', `Week ${week}`), el('p', 'view-sub', `${fmtShort(range.start)} – ${fmtShort(range.end)}${week === 15 ? ' · final revision' : ''}`)); host.append(header);
  const chips = el('div', 'chip-row');
  for (let n = 1; n <= term.calendar.final_revision_week; n++) { const chip = el('a', `chip${n === week ? ' active' : ''}`, n === 15 ? '15 · Rev' : n); chip.href = `#/week/${n}`; chips.append(chip); }
  host.append(chips);
  if (week <= term.calendar.teaching_weeks) {
    const daily = completionByDay(term, getState(), week); const total = daily.reduce((sum, day) => sum + day.total, 0); const done = daily.reduce((sum, day) => sum + day.done, 0); const minutes = daily.reduce((sum, day) => sum + day.minutes, 0); const remaining = daily.reduce((sum, day) => sum + day.minutes - day.doneMinutes, 0);
    const summary = el('div', 'week-summary'); summary.append(el('div', 'stat', `${done}/${total}\nBlocks`), el('div', 'stat', `${remaining}m\nRemaining`), el('div', 'stat', `${minutes}m\nPlanned`)); host.append(summary);
    const grid = el('div', 'day-grid');
    for (let offset = 0; offset < 7; offset++) {
      const date = addDays(range.start, offset); const weekday = WEEKDAY_NAMES[date.getDay()]; const dateISO = toISO(date); const plan = dayStack(week, weekday, term);
      const card = el('section', 'day-card'); const head = el('div', 'day-head'); const title = el('div'); title.append(el('strong', 'day-title', weekday), el('span', 'day-date', fmtShort(date)));
      const count = plan.blocks.filter((block) => isBlockDone(dateISO, block.id)).length; head.append(title, el('span', 'badge', plan.off ? 'Off' : `${count}/${plan.blocks.length}`)); card.append(head);
      if (plan.off) card.append(el('div', 'off-note', plan.note));
      else if (plan.kind === 'ledger_catchup') card.append(el('div', 'status-note', 'Light review + ledger catch-up'));
      else for (const block of plan.blocks) card.append(renderTaskBlock(block, { date: dateISO, blocks: plan.blocks,
        onDetail: () => openDetail(block, week, weekday, term), onChanged: () => renderWeek(document.getElementById('view'), week, ctx) }));
      grid.append(card);
    }
    host.append(grid);
  } else host.append(el('div', 'status-note', 'Final revision week: work overdue reviews, the Master Error Log, and the Last-Week Revision guide.'));
  const heat = el('section', 'view-section'); heat.append(el('h2', 'section-title', 'Term completion heatmap')); const target = el('div'); heat.append(target); host.append(heat);
  renderWeekHeatmap(target, { term, state: getState(), onSelect: (_course, value) => { location.hash = `#/week/${value}`; } });
}
