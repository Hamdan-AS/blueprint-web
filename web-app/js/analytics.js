import { addDays, toISO, weekStart, WEEKDAY_NAMES } from './dates.js';
import { dayStack } from './derive.js';

export function completionByCourseWeek(term, state) {
  const totals = new Map();
  for (const course of term.courses) for (let week = 1; week <= term.calendar.teaching_weeks; week++) {
    totals.set(`${course}-W${week}`, { total: 0, done: 0, minutes: 0, doneMinutes: 0 });
  }
  for (let week = 1; week <= term.calendar.teaching_weeks; week++) {
    const monday = weekStart(week, term);
    for (let offset = 0; offset < 7; offset++) {
      const date = addDays(monday, offset);
      const plan = dayStack(week, WEEKDAY_NAMES[date.getDay()], term);
      const done = new Set(state.days?.[toISO(date)]?.done_ids || []);
      for (const block of plan.blocks) {
        if (!block.course || ['rev', '-'].includes(block.course)) continue;
        const value = totals.get(`${block.course}-W${week}`);
        if (!value) continue;
        value.total++; value.minutes += block.minutes;
        if (done.has(block.id)) { value.done++; value.doneMinutes += block.minutes; }
      }
    }
  }
  return totals;
}

export function completionByDay(term, state, week) {
  const monday = weekStart(week, term);
  return Array.from({ length: 7 }, (_, offset) => {
    const date = addDays(monday, offset);
    const weekday = WEEKDAY_NAMES[date.getDay()];
    const plan = dayStack(week, weekday, term);
    const doneIds = new Set(state.days?.[toISO(date)]?.done_ids || []);
    const done = plan.blocks.filter((block) => doneIds.has(block.id));
    return { date, weekday, plan, total: plan.blocks.length, done: done.length,
      minutes: plan.blocks.reduce((sum, block) => sum + block.minutes, 0),
      doneMinutes: done.reduce((sum, block) => sum + block.minutes, 0) };
  });
}
