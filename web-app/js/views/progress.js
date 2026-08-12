import { completedCount, downloadLegacyState, downloadState, getHistory, getLedger, getState,
  getStorageMode, importStateJson, reviewsDue } from '../state.js';
import { completionByCourseWeek } from '../analytics.js';
import { COURSES } from '../ids.js';
import { progressRing } from '../components/progressRing.js';
import { renderWeekHeatmap } from '../components/weekHeatmap.js';
import { renderSparkline } from '../components/sparkline.js';
import { currentStreak, last14Days } from '../history.js';
const el = (tag, cls, text) => { const node = document.createElement(tag); if (cls) node.className = cls; if (text != null) node.textContent = text; return node; };
function stat(label, value) { const card = el('div', 'stat'); card.append(el('div', 'stat-value', value), el('div', 'stat-label', label)); return card; }
function flash(host, text, error) { const note = el('div', error ? 'error-note' : 'status-note', text); host.prepend(note); setTimeout(() => note.remove(), 4000); }

function transfers(host, ctx) {
  const panel = el('div', 'transfer-panel'); const row = el('div', 'chip-row');
  const exportButton = el('button', 'chip', 'Export backup'); exportButton.type = 'button'; exportButton.addEventListener('click', downloadState);
  const input = el('input'); input.type = 'file'; input.accept = '.json,application/json'; input.hidden = true; let mode = 'merge';
  input.addEventListener('change', async () => { const file = input.files?.[0]; if (!file) return; try { const result = await importStateJson(await file.text(), mode); await renderProgress(host, ctx); flash(host, `${result.mode === 'merge' ? 'Merged' : 'Restored'} backup · ${result.completed} completed blocks`); } catch (error) { flash(host, `Import failed: ${error.message}`, true); } });
  const merge = el('button', 'chip', 'Import + merge'); merge.type = 'button'; merge.addEventListener('click', () => { mode = 'merge'; input.click(); });
  const replace = el('button', 'chip danger-chip', 'Restore backup'); replace.type = 'button'; replace.addEventListener('click', () => { if (confirm('Replace all current progress? Export first if needed.')) { mode = 'replace'; input.click(); } });
  row.append(exportButton, merge, replace, input);
  if (getState().legacyArchives.length) { const legacy = el('button', 'chip', 'Download legacy archive'); legacy.type = 'button'; legacy.addEventListener('click', downloadLegacyState); row.append(legacy); }
  panel.append(row, el('p', 'view-sub', `Storage: ${getStorageMode()} · Term: ${ctx.term.term_id}`)); return panel;
}

export async function renderProgress(host, ctx) {
  host.textContent = ''; const term = ctx.term; const state = getState();
  const header = el('header', 'view-header'); header.append(el('h1', 'view-title', 'Progress'), el('p', 'view-sub', 'Canonical block completion, reviews, and ledger debt')); host.append(header, transfers(host, ctx));
  const history = getHistory(); const due = reviewsDue(); const owed = Object.values(getLedger()).reduce((sum, entry) => sum + (entry.owed || 0), 0);
  const stats = el('div', 'stat-grid'); stats.append(stat('Completed blocks', completedCount()), stat('Current streak', `${currentStreak(history, new Date())} days`), stat('Reviews due', due.length), stat('Ledger owed', `${owed.toFixed(2)} h`)); host.append(stats);
  const activity = el('section', 'view-section'); activity.append(el('h2', 'section-title', 'Last 14 days')); const spark = el('div'); activity.append(spark); host.append(activity); renderSparkline(spark, last14Days(history, new Date()));
  const totals = completionByCourseWeek(term, state); const courses = el('section', 'view-section'); courses.append(el('h2', 'section-title', 'By course'));
  for (const code of term.courses) {
    let total = 0; let done = 0; let minutes = 0; let doneMinutes = 0;
    for (let week = 1; week <= term.calendar.teaching_weeks; week++) { const value = totals.get(`${code}-W${week}`); total += value?.total || 0; done += value?.done || 0; minutes += value?.minutes || 0; doneMinutes += value?.doneMinutes || 0; }
    const pct = total ? Math.round(done / total * 100) : 0; const row = el('div', 'course-row'); const dot = el('span', 'course-dot'); dot.style.setProperty('--dot', COURSES[code].accent);
    const copy = el('span', 'course-name', COURSES[code].name); copy.append(el('span', 'course-progress-sub', `${done}/${total} blocks · ${doneMinutes}/${minutes} min`)); row.append(dot, copy, progressRing(pct, { size: 56, label: `${pct}%` })); courses.append(row);
  }
  host.append(courses);
  const reviews = el('section', 'view-section'); reviews.append(el('h2', 'section-title', 'Review queue'));
  if (!due.length) reviews.append(el('div', 'empty', 'No reviews are due.'));
  for (const pack of due) { const row = el('div', 'ledger-row'); row.append(el('span', 'ledger-course', pack.id), el('span', 'ledger-owed warn', `Due ${pack.next_review}`)); reviews.append(row); }
  host.append(reviews);
  const ledger = el('section', 'view-section'); ledger.append(el('h2', 'section-title', 'Ledger'));
  for (const code of term.courses) { const value = getLedger()[code]?.owed || 0; const row = el('div', 'ledger-row'); row.append(el('span', 'ledger-course', `${COURSES[code].code} ${COURSES[code].name}`), el('span', `ledger-owed ${value ? 'warn' : 'ok'}`, value ? `${value.toFixed(2)} h owed` : '0 owed')); ledger.append(row); }
  host.append(ledger);
  const heat = el('section', 'view-section'); heat.append(el('h2', 'section-title', 'Term completion heatmap')); const heatHost = el('div'); heat.append(heatHost); host.append(heat); renderWeekHeatmap(heatHost, { term, state, onSelect: (_course, week) => { location.hash = `#/week/${week}`; } });
}
