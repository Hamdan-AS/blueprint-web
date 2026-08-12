import { addDays, resolve, toDate, toISO, weekStart } from './dates.js';

export const STATE_VERSION = 4;
export const REVIEW_INTERVALS = [1, 3, 7, 14, 30];

export function createState(term) {
  return {
    version: STATE_VERSION, termId: term.term_id, days: {}, packs: {},
    ledger: Object.fromEntries(term.courses.map((course) => [course, { owed: 0 }])),
    events: [], settings: { theme: 'dark', layout: 'auto', accent: 'ubuntu' },
    legacyArchives: [], wk9_cleared: false, finalized_through: null,
  };
}

export function normalizeState(value, term) {
  const base = createState(term);
  if (!value || value.termId !== term.term_id) return base;
  return {
    ...base, ...value, version: STATE_VERSION,
    days: value.days && typeof value.days === 'object' ? value.days : {},
    packs: value.packs && typeof value.packs === 'object' ? value.packs : {},
    ledger: { ...base.ledger, ...(value.ledger || {}) },
    events: Array.isArray(value.events) ? value.events : [],
    settings: { ...base.settings, ...(value.settings || {}) },
    legacyArchives: Array.isArray(value.legacyArchives) ? value.legacyArchives : [],
  };
}

export function isBlockDone(state, dateISO, id) {
  return !!state.days[dateISO]?.done_ids?.includes(id);
}

export function toggleBlockState(state, dateISO, block, blocks, now = new Date()) {
  const entry = state.days[dateISO] || { total: blocks.length, done_ids: [] };
  const doneIds = new Set(entry.done_ids || []);
  const completed = !doneIds.has(block.id);
  completed ? doneIds.add(block.id) : doneIds.delete(block.id);
  state.days[dateISO] = { total: blocks.length, done_ids: [...doneIds].sort() };
  state.events.push({ id: `${now.toISOString()}-${block.id}-${completed ? 'done' : 'undo'}`,
    ts: now.toISOString(), date: dateISO, type: completed ? 'block_done' : 'block_undone',
    block_id: block.id, label: block.label, course: block.course });
  return completed;
}

function accrue(state, course, minutes) {
  const entry = state.ledger[course] || { owed: 0 };
  entry.owed = Math.round(((entry.owed || 0) + minutes / 60) * 100) / 100;
  state.ledger[course] = entry;
}

export function finalizeLedgerState(state, target, term, buildDayPlan) {
  const targetDate = target instanceof Date ? target : toDate(target);
  let start = state.finalized_through ? toDate(state.finalized_through) : toDate(term.calendar.semester_start);
  if (state.finalized_through) start = addDays(start, 1);
  const semesterStart = toDate(term.calendar.semester_start);
  if (start < semesterStart) start = semesterStart;
  const wk9End = addDays(weekStart(9, term), 6);
  if (targetDate > wk9End && !state.wk9_cleared) {
    for (const course of term.courses) state.ledger[course] = { owed: 0 };
    state.wk9_cleared = true;
    state.finalized_through = toISO(wk9End);
    start = addDays(wk9End, 1);
  }
  for (let cursor = start; cursor < targetDate; cursor = addDays(cursor, 1)) {
    const resolved = resolve(cursor, term);
    if (resolved.phase !== 'teaching') continue;
    const plan = buildDayPlan(resolved.week, resolved.weekday, term);
    const done = new Set(state.days[toISO(cursor)]?.done_ids || []);
    for (const block of plan.blocks) {
      if (done.has(block.id) || !['P1', 'P2'].includes(block.prio)) continue;
      if (!block.course || ['rev', '-'].includes(block.course)) continue;
      accrue(state, block.course, block.minutes);
    }
  }
  if (semesterStart < targetDate) {
    const through = toISO(addDays(targetDate, -1));
    if (!state.finalized_through || through > state.finalized_through) state.finalized_through = through;
  }
}

function nextReview(dateISO, count, term) {
  if (count <= REVIEW_INTERVALS.length) return toISO(addDays(toDate(dateISO), REVIEW_INTERVALS[count - 1]));
  if (count === 6) return toISO(addDays(weekStart(8, term), -1));
  if (count === 7) return toISO(weekStart(term.calendar.final_revision_week, term));
  return null;
}

export function completePackState(state, course, week, dateISO, term, now = new Date()) {
  const id = `${course}-W${week}`;
  if (state.packs[id]?.completed) return state.packs[id];
  const pack = { id, course, week, completed: dateISO, review_count: 1, interval: 1,
    stage: 'interval', next_review: nextReview(dateISO, 1, term) };
  state.packs[id] = pack;
  state.events.push({ id: `${now.toISOString()}-${id}-pack`, ts: now.toISOString(), date: dateISO,
    type: 'pack_completed', pack_id: id, course });
  return pack;
}

export function completeReviewState(state, packId, dateISO, term, now = new Date()) {
  const pack = state.packs[packId];
  if (!pack?.next_review) return null;
  pack.review_count += 1;
  const count = pack.review_count;
  pack.interval = count <= 5 ? REVIEW_INTERVALS[count - 1] : null;
  pack.stage = count <= 5 ? 'interval' : count === 6 ? 'pre-midterm' : count === 7 ? 'pre-final' : 'complete';
  pack.last_reviewed = dateISO;
  pack.next_review = nextReview(dateISO, count, term);
  state.events.push({ id: `${now.toISOString()}-${packId}-review-${count}`, ts: now.toISOString(),
    date: dateISO, type: 'review_completed', pack_id: packId, course: pack.course, review_count: count });
  return pack;
}

export function reviewsForDate(state, dateISO, includeFuture = false) {
  return Object.values(state.packs).filter((pack) => pack.next_review && (includeFuture || pack.next_review <= dateISO))
    .sort((a, b) => a.next_review.localeCompare(b.next_review) || a.id.localeCompare(b.id));
}

export function mergeState(current, incoming, term) {
  const next = normalizeState(structuredClone(current), term);
  for (const [day, entry] of Object.entries(incoming.days || {})) {
    const old = next.days[day] || { total: 0, done_ids: [] };
    next.days[day] = { total: Math.max(old.total, entry.total || 0),
      done_ids: [...new Set([...(old.done_ids || []), ...(entry.done_ids || [])])].sort() };
  }
  next.packs = { ...next.packs, ...(incoming.packs || {}) };
  for (const course of term.courses) next.ledger[course] = {
    owed: Math.max(next.ledger[course]?.owed || 0, incoming.ledger?.[course]?.owed || 0),
  };
  next.events = [...new Map([...next.events, ...(incoming.events || [])].map((event) => [event.id, event])).values()];
  next.finalized_through = [next.finalized_through, incoming.finalized_through].filter(Boolean).sort().pop() || null;
  next.wk9_cleared ||= !!incoming.wk9_cleared;
  return next;
}
