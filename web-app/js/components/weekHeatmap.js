import { completionByCourseWeek } from '../analytics.js';
function level(pct) { return !pct ? 'empty' : pct >= 100 ? 'level-5' : pct >= 76 ? 'level-4' : pct >= 51 ? 'level-3' : pct >= 26 ? 'level-2' : 'level-1'; }
export function renderWeekHeatmap(host, { term, state, onSelect }) {
  host.textContent = ''; const totals = completionByCourseWeek(term, state); const grid = document.createElement('div'); grid.className = 'heatmap';
  for (const code of term.courses) {
    const row = document.createElement('div'); row.className = 'heatmap-row'; const head = document.createElement('span'); head.className = 'heatmap-row-head'; head.textContent = code; row.append(head);
    for (let week = 1; week <= term.calendar.teaching_weeks; week++) {
      const value = totals.get(`${code}-W${week}`) || { total: 0, done: 0 }; const pct = value.total ? Math.round(value.done / value.total * 100) : 0;
      const cell = document.createElement('button'); cell.type = 'button'; cell.className = `heatmap-cell ${level(pct)}`; cell.textContent = value.total ? value.done : '';
      cell.title = `${code} W${week}: ${value.done}/${value.total} blocks (${pct}%)`; cell.setAttribute('aria-label', cell.title); cell.addEventListener('click', () => onSelect?.(code, week)); row.append(cell);
    }
    grid.append(row);
  }
  const legend = document.createElement('p'); legend.className = 'heatmap-legend'; legend.textContent = 'Empty → partial → complete'; host.append(grid, legend);
}
