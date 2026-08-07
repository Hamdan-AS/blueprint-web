export const WEEKDAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DAY_INDEX = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

export function toDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function toISO(date) {
  const p = (n) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())}`;
}

export function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

export function daysBetween(a, b) {
  const ms = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate()) -
             Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  return Math.round(ms / 86400000);
}

export function fmtShort(date) {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

export function fmtLong(date) {
  return date.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
}

export function weekStart(week, term) {
  return addDays(toDate(term.calendar.semester_start), (week - 1) * 7);
}

export function weekDateRange(week, term) {
  const start = weekStart(week, term);
  return { start, end: addDays(start, 6) };
}

function examWindow(term) {
  const start = weekStart(term.calendar.final_revision_week + 1, term);
  return { start, end: addDays(start, term.calendar.exam_window_days - 1) };
}

export function overrideFor(term, week, weekday) {
  const list = (term.calendar.overrides || []).filter((o) => o.week === week && o.weekday === weekday);
  return list.length ? list[0] : null;
}

export function variantFor(term, week) {
  const v = term.variant_weeks && term.variant_weeks[String(week)];
  return v || 'normal';
}

export function resolve(target, term) {
  const weekday = WEEKDAY_NAMES[target.getDay()];
  const start = toDate(term.calendar.semester_start);
  const base = {
    target_date: target,
    weekday,
    variant: 'n/a',
    off: false,
    note: '',
    days_until_start: null,
  };

  if (target < start) {
    return { ...base, phase: 'pre-semester', week: null, days_until_start: daysBetween(target, start) };
  }

  const ew = examWindow(term);
  if (target >= ew.start && target <= ew.end) {
    return { ...base, phase: 'exam-window', week: null };
  }
  if (target > ew.end) {
    return { ...base, phase: 'post-exam', week: null };
  }

  let week = Math.floor(daysBetween(start, target) / 7) + 1;
  if (week > term.calendar.final_revision_week) week = term.calendar.final_revision_week;
  if (week > term.calendar.teaching_weeks) {
    return { ...base, phase: 'final-revision', week };
  }

  const ov = overrideFor(term, week, weekday);
  return {
    ...base,
    phase: 'teaching',
    week,
    variant: variantFor(term, week),
    off: !!(ov && ov.off),
    note: ov ? ov.note : '',
  };
}

export function WEEK_SLOT(weekday) {
  return DAY_INDEX[weekday];
}
