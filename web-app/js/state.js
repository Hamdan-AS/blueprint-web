const LS_STATE = 'blueprint-state-v1';
const LS_THEME = 'blueprint-theme';
const LS_LAYOUT = 'blueprint-layout';
const LS_ACCENT = 'blueprint-accent';
const DEFAULT_ACCENT = 'ubuntu';

const TERM_URL = new URL('../../terms/2026-fall/term.json', import.meta.url).href;
const STATE_URL = new URL('../../terms/2026-fall/tracker/state.json', import.meta.url).href;

const TERM_FALLBACK = {
  schema: 1,
  term_id: '2026-fall',
  name: 'Fall 2026 (3rd Year)',
  calendar: {
    semester_start: '2026-08-17',
    teaching_weeks: 14,
    final_revision_week: 15,
    exam_window_days: 18,
    overrides: [
      { week: 8, weekday: 'Sat', off: true, note: 'Midterm exam week — Saturday off' }
    ]
  },
  courses: ['CA', 'AI', 'CCN', 'SE', 'PS'],
  lab_courses: ['AI', 'CCN', 'SE'],
  rotation: {
    Mon: ['CA', 'PS'],
    Tue: ['CA', 'PS'],
    Wed: ['AI', 'CCN'],
    Thu: ['CCN', 'SE'],
    Fri: ['AI', 'SE'],
    Sat: [null, null],
    Sun: [null, null]
  },
  load_tiers: { CA: 5.0, AI: 4.0, CCN: 3.5, PS: 3.0, SE: 2.5 },
  variant_weeks: { '8': 'wk8-exam', '9': 'wk9-recovery' },
  templates: {
    normal: [
      { label: 'review', prio: 'P0', minutes: 25, who: 'A' },
      { label: 'deep_study_A', prio: 'P0', minutes: 55, who: 'A' },
      { label: 'drill_A', prio: 'P0', minutes: 40, who: 'A' },
      { label: 'deep_study_B', prio: 'P1', minutes: 55, who: 'B' },
      { label: 'interleaved', prio: 'P1', minutes: 30, who: 'rev' },
      { label: 'power_nap', prio: 'P2', minutes: 20, who: '-' },
      { label: 'blank_page', prio: 'P2', minutes: 30, who: 'A' },
      { label: 'buffer_plan', prio: 'P2', minutes: 20, who: '-' }
    ],
    'wk8-exam': [
      { label: 'past_paper_run', prio: 'P0', minutes: 60, who: 'A' },
      { label: 'blank_page', prio: 'P0', minutes: 30, who: 'A' },
      { label: 'error_log_review', prio: 'P0', minutes: 20, who: 'A' }
    ]
  },
  wk9_recovery_blocks: 4,
  lab_stack: [
    { label: 'lab_ai', prio: 'P1', minutes: 45, course: 'AI' },
    { label: 'lab_ccn', prio: 'P1', minutes: 45, course: 'CCN' },
    { label: 'lab_se', prio: 'P1', minutes: 45, course: 'SE' }
  ],
  lab_omission: { SE: [7, 10], CCN: [8] },
  label_display: {
    review: 'Review lecture copies -> flag 3 unclear -> Master Error Log',
    deep_study_A: 'Deep study A (fear-killer pack + bundled books)',
    drill_A: 'Same-problem drill A (one type until speed target)',
    deep_study_B: 'Deep study B (fear-killer pack, second course)',
    interleaved: 'Interleaved retrieval (topics from 1/2/4 weeks ago)',
    power_nap: 'Power nap',
    blank_page: "Blank-page retrieval of today's content",
    buffer_plan: 'Buffer + plan tomorrow',
    past_paper_run: 'Past-paper run (exam subject)',
    error_log_review: 'Master Error Log review',
    lab_ai: 'Lab work (AI) — repo + lab breakdown',
    lab_ccn: 'Lab work (CCN) — repo + lab breakdown',
    lab_se: 'Lab work (SE) — repo + lab breakdown'
  },
  reference_exceptions: {
    'SE-W1': ['07-Master-Overview.md', 'Lab-Schedule.md'],
    'SE-W10': ['Lab-Schedule.md']
  }
};

let term = null;
let serverState = null;
let termIsFallback = false;
let completedIds = new Set();
let history = {};

function toISODate(d) {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function normalizeHistory(h) {
  const out = {};
  if (h && typeof h === 'object') {
    for (const k of Object.keys(h)) {
      if (/^\d{4}-\d{2}-\d{2}$/.test(k) && Array.isArray(h[k])) {
        const ids = h[k].filter(Boolean);
        if (ids.length) out[k] = [...new Set(ids)];
      }
    }
  }
  return out;
}

function removeIdFromHistory(id) {
  for (const k of Object.keys(history)) {
    const arr = history[k];
    if (arr.includes(id)) {
      const next = arr.filter((x) => x !== id);
      if (next.length) history[k] = next;
      else delete history[k];
    }
  }
}

function addToHistory(id, dateISO) {
  removeIdFromHistory(id);
  const key = dateISO || toISODate(new Date());
  (history[key] = history[key] || []).push(id);
}

async function fetchJson(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    return null;
  }
}

export async function initState() {
  const [t, s] = await Promise.all([fetchJson(TERM_URL), fetchJson(STATE_URL)]);
  if (t) {
    term = t;
  } else {
    term = TERM_FALLBACK;
    termIsFallback = true;
  }
  if (s) serverState = s;
  try {
    const raw = localStorage.getItem(LS_STATE);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.completedIds)) {
        completedIds = new Set(parsed.completedIds.filter(Boolean));
      }
      history = normalizeHistory(parsed && parsed.history);
    }
  } catch (e) {
    completedIds = new Set();
    history = {};
  }
  return { term, serverState };
}

function persistState() {
  const data = {
    version: 3,
    termId: term ? term.term_id : '2026-fall',
    completedIds: [...completedIds],
    history,
  };
  try {
    localStorage.setItem(LS_STATE, JSON.stringify(data));
  } catch (e) {
    /* storage full/blocked — non-fatal */
  }
}

export function getTerm() {
  return term;
}

export function getTermFallbackUsed() {
  return termIsFallback;
}

export function getServerState() {
  return serverState;
}

export function getLedger() {
  return (serverState && serverState.ledger) || {};
}

export function getCompletedIds() {
  return completedIds;
}

export function isCompleted(id) {
  return completedIds.has(id);
}

export function completedCount() {
  return completedIds.size;
}

export function getHistory() {
  return history;
}

export function toggleCompleted(id, dateISO) {
  if (completedIds.has(id)) {
    completedIds.delete(id);
    removeIdFromHistory(id);
  } else {
    completedIds.add(id);
    addToHistory(id, dateISO);
  }
  persistState();
  return completedIds.has(id);
}

export function serializeState() {
  return {
    version: 3,
    termId: term ? term.term_id : '2026-fall',
    exportedAt: new Date().toISOString(),
    completedIds: [...completedIds],
    history,
  };
}

export function downloadState() {
  const blob = new Blob([JSON.stringify(serializeState(), null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `blueprint-state-${term ? term.term_id : '2026-fall'}-${toISODate(new Date())}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function importStateJson(text) {
  const data = JSON.parse(text);
  if (!data || typeof data !== 'object' || !Array.isArray(data.completedIds)) {
    throw new Error('Invalid state file');
  }
  const imported = new Set(data.completedIds.filter(Boolean));
  const importedHistory = normalizeHistory(data.history);
  let merged = 0;
  for (const id of imported) {
    if (!completedIds.has(id)) {
      completedIds.add(id);
      merged++;
    }
  }
  for (const k of Object.keys(importedHistory)) {
    for (const id of importedHistory[k]) {
      if (imported.has(id)) addToHistory(id, k);
    }
  }
  persistState();
  return { merged };
}

export function getTheme() {
  try {
    return localStorage.getItem(LS_THEME) || 'dark';
  } catch (e) {
    return 'dark';
  }
}

export function setTheme(t) {
  try {
    localStorage.setItem(LS_THEME, t);
  } catch (e) {
    /* non-fatal */
  }
  document.body.dataset.theme = t;
}

export function getLayout() {
  try {
    return localStorage.getItem(LS_LAYOUT) || 'auto';
  } catch (e) {
    return 'auto';
  }
}

export function setLayout(l) {
  try {
    localStorage.setItem(LS_LAYOUT, l);
  } catch (e) {
    /* non-fatal */
  }
}

export function getAccent() {
  try {
    return localStorage.getItem(LS_ACCENT) || DEFAULT_ACCENT;
  } catch (e) {
    return DEFAULT_ACCENT;
  }
}

export function setAccent(a) {
  try {
    localStorage.setItem(LS_ACCENT, a);
  } catch (e) {
    /* non-fatal */
  }
  document.body.dataset.accent = a;
}
