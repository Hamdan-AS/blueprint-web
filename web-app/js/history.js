import { toISO, addDays } from './dates.js';

export function countsForDay(history, date) {
  return (history[toISO(date)] || []).length;
}

export function currentStreak(history, refDate) {
  let d = new Date(refDate.getFullYear(), refDate.getMonth(), refDate.getDate());
  if (countsForDay(history, d) === 0) d = addDays(d, -1);
  let streak = 0;
  while (countsForDay(history, d) > 0) {
    streak++;
    d = addDays(d, -1);
  }
  return streak;
}

export function last14Days(history, refDate) {
  const out = [];
  for (let i = 13; i >= 0; i--) {
    const d = addDays(refDate, -i);
    out.push({ date: d, iso: toISO(d), count: countsForDay(history, d) });
  }
  return out;
}

export function totalCompleted(history) {
  let sum = 0;
  for (const k of Object.keys(history)) sum += history[k].length;
  return sum;
}
