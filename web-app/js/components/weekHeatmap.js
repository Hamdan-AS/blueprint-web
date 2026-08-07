import { COURSES } from '../ids.js';
import { getTotalsAll } from '../derive.js';

const LEGEND = [
  [0.25, '0%'],
  [0.45, '25%'],
  [0.65, '50%'],
  [0.85, '75%'],
  [1, '100%'],
];

function legendEntry(alpha, label) {
  const frag = document.createDocumentFragment();
  const swatch = document.createElement('div');
  swatch.className = 'heatmap-swatch';
  swatch.style.background = `rgba(56, 189, 248, ${alpha})`;
  frag.appendChild(swatch);
  const text = document.createElement('span');
  text.textContent = label;
  frag.appendChild(text);
  return frag;
}

function levelClass(t, pct) {
  if (!t || !t.total || pct === 0) return 'empty';
  if (pct >= 100) return 'level-5';
  if (pct >= 76) return 'level-4';
  if (pct >= 51) return 'level-3';
  if (pct >= 26) return 'level-2';
  return 'level-1';
}

export async function renderWeekHeatmap(host, { term, completed, onSelect }) {
  host.textContent = '';
  const totals = await getTotalsAll(term, completed);
  const teachingWeeks = term.calendar.teaching_weeks;
  const courses = term.courses && term.courses.length ? term.courses : Object.keys(COURSES);

  const grid = document.createElement('div');
  grid.className = 'heatmap';

  for (const code of courses) {
    const row = document.createElement('div');
    row.className = 'heatmap-row';

    const head = document.createElement('span');
    head.className = 'heatmap-row-head';
    head.textContent = code;
    row.appendChild(head);

    for (let w = 1; w <= teachingWeeks; w++) {
      const t = totals.get(`${code}-W${w}`);
      const pct = t && t.total ? Math.round((t.done / t.total) * 100) : 0;

      const cell = document.createElement('button');
      cell.type = 'button';
      cell.className = `heatmap-cell ${levelClass(t, pct)}`;

      const num = document.createElement('span');
      num.textContent = t && t.total ? String(t.done) : '';
      cell.appendChild(num);

      cell.title = t ? `${code} W${w}: ${t.done}/${t.total}` : `${code} W${w}: no tasks`;
      cell.onclick = () => onSelect && onSelect(code, w);
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }

  const legend = document.createElement('div');
  legend.className = 'heatmap-legend';
  for (const [alpha, label] of LEGEND) legend.appendChild(legendEntry(alpha, label));

  host.appendChild(grid);
  host.appendChild(legend);
}
