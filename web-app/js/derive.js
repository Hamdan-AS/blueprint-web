import { COURSES, DAY_SLOT, makeTopicId } from './ids.js';
import { fetchMd, parseSections, findSection, bulletLines, checkboxLines } from './md.js';
import { WEEK_SLOT, variantFor, overrideFor } from './dates.js';
import { blockId } from './hash.js';

const manifestCache = new Map();

export function manifestUrl(course, week) {
  return `../terms/2026-fall/${course}/weeks/${course}-W${week}.md`;
}

export async function loadManifest(course, week) {
  const key = `${course}-W${week}`;
  if (manifestCache.has(key)) return manifestCache.get(key);
  const text = await fetchMd(manifestUrl(course, week));
  const parsed = text ? parseSections(text) : null;
  const m = {
    ok: !!parsed,
    course,
    week,
    title: parsed ? parsed.title : '',
    dates: parsed ? parsed.dates : '',
    declaredWeek: parsed ? parsed.declaredWeek : null,
    sections: parsed ? parsed.sections : {},
    pairs: parsed ? parsed.pairs : [],
  };
  manifestCache.set(key, m);
  return m;
}

export function dayCoursesFor(weekday, term) {
  const pair = (term.rotation && term.rotation[weekday]) || [];
  const out = [];
  if (pair[0]) out.push({ course: pair[0], role: 'A' });
  if (pair[1]) out.push({ course: pair[1], role: 'B' });
  return out;
}

export function activeDaysFor(course) {
  const meta = COURSES[course];
  return meta.aDays.concat(meta.bDays).sort((a, b) => DAY_SLOT[a] - DAY_SLOT[b]);
}

export function labDay(course, week, term) {
  if (!term.lab_courses || !term.lab_courses.includes(course)) return false;
  const om = (term.lab_omission && term.lab_omission[course]) || [];
  if (om.includes(week)) return false;
  if (variantFor(term, week) === 'wk8-exam') return false;
  return true;
}

function findSectionLab(pairs) {
  for (const [key, body] of pairs) {
    if (key.startsWith('Lab') && body.trim()) {
      const title = key.slice('Lab'.length).trim() || null;
      return { key, body, title };
    }
  }
  return null;
}

function packLabel(body) {
  const m = /^\*\*Pack:\*\*\s*(.+)$/m.exec(body);
  if (m) return m[1].trim();
  return 'Deep study (pack)';
}

const META_BULLET = /^\*\*(Source|No new material)\b/;

function distribute(bullets, days) {
  const buckets = {};
  for (const d of days) buckets[d] = [];
  bullets.forEach((b, i) => {
    if (!b || META_BULLET.test(b)) return;
    buckets[days[i % days.length]].push(b);
  });
  return buckets;
}

function courseItemsForDay(course, week, weekday, manifest, term) {
  const meta = COURSES[course];
  const active = activeDaysFor(course);
  const out = [];
  const base = { course, week, weekday };

  if (weekday === active[0]) {
    const floor = findSection(manifest.pairs, 'P0 floor');
    if (floor) {
      for (const label of checkboxLines(floor.body)) {
        out.push({ ...base, section: 'P0 floor', source: floor.key, label });
      }
    }
  }

  if (weekday === 'Sat') return out;

  if (meta.aDays.includes(weekday)) {
    const da = findSection(manifest.pairs, 'Deep study A');
    if (da) {
      out.push({ ...base, section: 'Deep study A', source: da.key, label: packLabel(da.body) });
    }
  }
  if (meta.bDays.includes(weekday)) {
    const db = findSection(manifest.pairs, 'Deep study B');
    if (db) {
      out.push({ ...base, section: 'Deep study B', source: db.key, label: packLabel(db.body) });
    }
  }

  if (active.includes(weekday)) {
    const topics = findSection(manifest.pairs, 'Topics');
    if (topics) {
      const buckets = distribute(bulletLines(topics.body), active);
      for (const label of buckets[weekday] || []) {
        out.push({ ...base, section: 'Topics', source: topics.key, label });
      }
    }
  }

  return out;
}

function labItemsForDay(course, week, manifest, term) {
  if (!labDay(course, week, term)) return [];
  const lab = findSectionLab(manifest.pairs);
  if (!lab) return [];
  const labels = checkboxLines(lab.body).length ? checkboxLines(lab.body) : bulletLines(lab.body);
  return labels.map((label) => ({
    course,
    week,
    weekday: 'Sat',
    section: 'Lab',
    source: lab.key,
    label,
  }));
}

export async function topicsForDay(week, weekday, term) {
  const items = [];
  for (const { course } of dayCoursesFor(weekday, term)) {
    const manifest = await loadManifest(course, week);
    if (!manifest.ok) continue;
    items.push(...courseItemsForDay(course, week, weekday, manifest, term));
  }
  if (weekday === 'Sat') {
    for (const course of term.courses || []) {
      if (!labDay(course, week, term)) continue;
      const manifest = await loadManifest(course, week);
      if (!manifest.ok) continue;
      items.push(...labItemsForDay(course, week, manifest, term));
    }
  }
  const slot = WEEK_SLOT(weekday);
  return items.map((it, i) => ({
    ...it,
    daySlot: slot,
    index: i + 1,
    id: makeTopicId(it.course, week, slot, i + 1),
  }));
}

export async function topicsForCourseWeek(course, week, term) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const all = [];
  for (const weekday of days) {
    const inRotation = dayCoursesFor(weekday, term).some((d) => d.course === course);
    const satLab = weekday === 'Sat' && labDay(course, week, term);
    if (!inRotation && !satLab) continue;
    const dayItems = await topicsForDay(week, weekday, term);
    all.push(...dayItems.filter((it) => it.course === course));
  }
  return all;
}

export async function totalsForCourseWeek(course, week, term, completed) {
  const items = await topicsForCourseWeek(course, week, term);
  const done = items.filter((it) => completed.has(it.id)).length;
  return { total: items.length, done };
}

export async function totalsAll(term, completed) {
  const map = new Map();
  for (const course of term.courses || []) {
    for (let week = 1; week <= term.calendar.teaching_weeks; week++) {
      map.set(`${course}-W${week}`, await totalsForCourseWeek(course, week, term, completed));
    }
  }
  return map;
}

export async function sectionBody(item) {
  const m = await loadManifest(item.course, item.week);
  if (!m.ok) return null;
  return m.sections[item.source] || null;
}

export async function sectionDetail(item) {
  const m = await loadManifest(item.course, item.week);
  if (!m.ok) return { body: null, dup: false };
  const f = findSection(m.pairs, item.source);
  return { body: m.sections[item.source] || null, dup: !!(f && f.dup) };
}

export async function labMissing(course, week, term) {
  if (!labDay(course, week, term)) return false;
  const m = await loadManifest(course, week);
  if (!m.ok) return true;
  return !findSectionLab(m.pairs);
}

function detailSectionFor(label) {
  if (['review', 'blank_page', 'past_paper_run'].includes(label)) return 'Topics';
  if (label === 'deep_study_A') return 'Deep study A';
  if (label === 'deep_study_B') return 'Deep study B';
  if (label === 'drill_A') return 'P0 floor';
  if (label.startsWith('lab_')) return 'Lab';
  if (label === 'interleaved') return 'Interleaved retrieval';
  return null;
}

export async function materialForBlock(block, week, weekday, term) {
  const sectionName = detailSectionFor(block.label);
  const courses = block.course && !['rev', '-'].includes(block.course) ? [block.course]
    : block.course === 'rev' ? dayCoursesFor(weekday, term).map((entry) => entry.course) : [];
  const material = [];
  for (const course of courses) {
    const manifest = await loadManifest(course, week);
    const section = manifest.ok && sectionName ? findSection(manifest.pairs, sectionName) : null;
    if (section?.body) material.push({ course, section: section.key, body: section.body,
      path: manifestUrl(course, week), duplicate: !!section.dup });
  }
  return material;
}

let totalsCache = null;
let totalsKey = null;

export async function getTotalsAll(term, completed) {
  const key = [...completed].sort().join(',');
  if (totalsCache && totalsKey === key) return totalsCache;
  totalsCache = await totalsAll(term, completed);
  totalsKey = key;
  return totalsCache;
}

export function dayStack(week, weekday, term) {
  const courses = dayCoursesFor(weekday, term).map((d) => d.course);
  const offOverride = overrideFor(term, week, weekday);
  const off = !!(offOverride && offOverride.off);
  const note = offOverride ? offOverride.note : '';
  const variant = variantFor(term, week);
  let blocks = [];

  if (off) {
    return { blocks, courses, off, note, variant, kind: 'off' };
  }

  if (courses.length) {
    let tmpl = (term.templates && term.templates[variant]) || term.templates.normal;
    if (variant === 'wk9-recovery') tmpl = term.templates.normal.slice(0, 4);
    blocks = tmpl.map((b, i) => {
      const course = b.who === 'A' ? courses[0] : b.who === 'B' ? courses[1] : b.who === 'rev' ? 'rev' : '-';
      return { id: blockId(b.label, course), block: i + 1,
      label: b.label,
      prio: b.prio,
      minutes: b.minutes,
      course,
      who: b.who,
      display: (term.label_display && term.label_display[b.label]) || b.label,
    }; });
  }

  if (weekday === 'Sat') {
    for (const lab of term.lab_stack || []) {
      if (!labDay(lab.course, week, term)) continue;
      blocks.push({
        id: blockId(lab.label, lab.course),
        block: blocks.length + 1,
        label: lab.label,
        prio: lab.prio,
        minutes: lab.minutes,
        course: lab.course,
        who: 'lab',
        display: (term.label_display && term.label_display[lab.label]) || lab.label,
      });
    }
  }

  const kind = weekday === 'Sat' ? 'labs' : weekday === 'Sun' ? 'ledger_catchup' : 'stack';
  return { blocks, courses, off, note, variant, kind };
}
