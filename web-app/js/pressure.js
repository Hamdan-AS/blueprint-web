import { weekDateRange, daysBetween, toDate } from './dates.js';

function clamp01(v) {
  return Math.min(1, Math.max(0, v));
}

export function termPressure(today, term) {
  const start = toDate(term.calendar.semester_start);
  const end = weekDateRange(term.calendar.teaching_weeks, term).end;
  const total = daysBetween(start, end);
  if (total <= 0) return 1;
  return clamp01(daysBetween(start, today) / total);
}

export function weekPressure(today, week, term) {
  const { start, end } = weekDateRange(week, term);
  const total = daysBetween(start, end);
  if (total <= 0) return 1;
  return clamp01(daysBetween(start, today) / total);
}

export function pressureColor(pct) {
  const p = clamp01(pct);
  if (p < 0.5) return lerpColor('#3fb950', '#d29922', p / 0.5);
  return lerpColor('#d29922', '#f85149', (p - 0.5) / 0.5);
}

function lerpColor(c1, c2, t) {
  const r1 = parseInt(c1.slice(1, 3), 16);
  const g1 = parseInt(c1.slice(3, 5), 16);
  const b1 = parseInt(c1.slice(5, 7), 16);
  const r2 = parseInt(c2.slice(1, 3), 16);
  const g2 = parseInt(c2.slice(3, 5), 16);
  const b2 = parseInt(c2.slice(5, 7), 16);
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const b = Math.round(b1 + (b2 - b1) * t);
  return '#' + [r, g, b].map((n) => n.toString(16).padStart(2, '0')).join('');
}
