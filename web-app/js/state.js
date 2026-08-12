import { dayStack } from './derive.js';
import { toISO } from './dates.js';
import { STATE_VERSION, completePackState, completeReviewState, finalizeLedgerState,
  isBlockDone as modelIsDone, mergeState, normalizeState, reviewsForDate,
  toggleBlockState } from './stateModel.js';

const TERM_URL = new URL('../../terms/2026-fall/term.json', import.meta.url).href;
const DB_NAME = 'blueprint-v2';
const DB_STORE = 'term-state';
const FALLBACK_KEY = 'blueprint-v2-state';
const LEGACY_KEY = 'blueprint-state-v1';
let term; let state; let database; let storageMode = 'indexeddb';

async function fetchJson(url) {
  try { const response = await fetch(url, { cache: 'no-cache' }); return response.ok ? response.json() : null; }
  catch (_) { return null; }
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    if (!globalThis.indexedDB) return reject(new Error('IndexedDB unavailable'));
    const request = indexedDB.open(DB_NAME, 1);
    let settled = false;
    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      reject(new Error('IndexedDB timed out'));
    }, 1800);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(DB_STORE)) request.result.createObjectStore(DB_STORE);
    };
    request.onsuccess = () => {
      clearTimeout(timer);
      if (settled) { request.result.close(); return; }
      settled = true;
      resolve(request.result);
    };
    request.onerror = () => {
      clearTimeout(timer);
      if (settled) return;
      settled = true;
      reject(request.error);
    };
    request.onblocked = () => {
      clearTimeout(timer);
      if (settled) return;
      settled = true;
      reject(new Error('IndexedDB upgrade blocked'));
    };
  });
}

function dbGet(key) {
  return new Promise((resolve, reject) => {
    const request = database.transaction(DB_STORE).objectStore(DB_STORE).get(key);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}

function dbPut(key, value) {
  return new Promise((resolve, reject) => {
    const tx = database.transaction(DB_STORE, 'readwrite');
    tx.objectStore(DB_STORE).put(value, key);
    tx.oncomplete = resolve; tx.onerror = () => reject(tx.error);
  });
}

function readFallback() { try { return JSON.parse(localStorage.getItem(FALLBACK_KEY)); } catch (_) { return null; } }
function writeFallback() { localStorage.setItem(FALLBACK_KEY, JSON.stringify(state)); }
function notify() { dispatchEvent(new CustomEvent('blueprint-state-change', { detail: state })); }

export async function saveState(quiet = false) {
  try { database ? await dbPut(term.term_id, state) : writeFallback(); }
  catch (_) { storageMode = 'memory'; }
  if (!quiet) notify();
}

function archiveLegacy() {
  try {
    const raw = localStorage.getItem(LEGACY_KEY);
    if (!raw) return false;
    state.legacyArchives.push({ capturedAt: new Date().toISOString(), source: LEGACY_KEY, data: JSON.parse(raw) });
    localStorage.removeItem(LEGACY_KEY); return true;
  } catch (_) { return false; }
}

export async function initState() {
  term = await fetchJson(TERM_URL);
  if (!term) throw new Error('Term configuration is unavailable. Serve the _v2 folder over HTTP.');
  let saved = null;
  try { database = await openDatabase(); saved = await dbGet(term.term_id); }
  catch (_) { storageMode = 'localstorage-fallback'; saved = readFallback(); }
  state = normalizeState(saved, term);
  const archived = archiveLegacy();
  finalizeLedgerState(state, new Date(), term, dayStack);
  await saveState(true); applySettings();
  return { term, state, archived, storageMode };
}

export const getTermFallbackUsed = () => false;
export const getTerm = () => term;
export const getState = () => state;
export const getStorageMode = () => storageMode;
export const getLedger = () => state?.ledger || {};
export const getDayState = (dateISO) => state?.days?.[dateISO] || { total: 0, done_ids: [] };
export const isBlockDone = (dateISO, id) => modelIsDone(state, dateISO, id);
export const reviewsDue = (dateISO = toISO(new Date()), includeFuture = false) => reviewsForDate(state, dateISO, includeFuture);
export const completedCount = () => Object.values(state?.days || {}).reduce((sum, day) => sum + (day.done_ids?.length || 0), 0);
export function getHistory() {
  const history = {};
  for (const event of state?.events || []) if (['block_done', 'review_completed', 'pack_completed'].includes(event.type)) {
    (history[event.date] ||= []).push(event.id);
  }
  return history;
}

export async function toggleBlock(dateISO, block, blocks) {
  const result = toggleBlockState(state, dateISO, block, blocks); await saveState(); return result;
}
export async function completePack(course, week, dateISO) {
  const result = completePackState(state, course, week, dateISO, term); await saveState(); return result;
}
export async function completeReview(packId, dateISO) {
  const result = completeReviewState(state, packId, dateISO, term); if (result) await saveState(); return result;
}
export async function finalizeLedger(target) { finalizeLedgerState(state, target, term, dayStack); await saveState(); }

export function serializeState() {
  return { schema: 'blueprint-web-state', version: STATE_VERSION, termId: term.term_id,
    exportedAt: new Date().toISOString(), state: structuredClone(state) };
}
function download(data, name) {
  const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
  const anchor = document.createElement('a'); anchor.href = url; anchor.download = name;
  document.body.append(anchor); anchor.click(); anchor.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
}
export function downloadState() { download(serializeState(), `blueprint-v2-${term.term_id}-${toISO(new Date())}.json`); }
export function downloadLegacyState() {
  if (!state.legacyArchives.length) return false;
  download({ schema: 'blueprint-legacy-archive', archives: state.legacyArchives }, `blueprint-legacy-${term.term_id}.json`); return true;
}
export async function importStateJson(text, mode = 'merge') {
  const envelope = JSON.parse(text);
  if (envelope?.schema !== 'blueprint-web-state' || envelope.version !== STATE_VERSION || !envelope.state) throw new Error('Not a Blueprint v2 state file.');
  if (envelope.termId !== term.term_id || envelope.state.termId !== term.term_id) throw new Error(`State belongs to ${envelope.termId || 'another term'}.`);
  state = mode === 'replace' ? normalizeState(envelope.state, term) : mergeState(state, normalizeState(envelope.state, term), term);
  await saveState(); return { mode, completed: completedCount() };
}

export const getSetting = (name) => state?.settings?.[name];
export async function setSetting(name, value) { state.settings[name] = value; applySettings(); await saveState(true); }
export function applySettings() {
  if (!state) return;
  document.body.dataset.theme = state.settings.theme || 'dark';
  document.body.dataset.accent = state.settings.accent || 'ubuntu';
  const layout = state.settings.layout || 'auto';
  document.body.dataset.layout = layout === 'auto' ? (matchMedia('(min-width: 880px)').matches ? 'laptop' : 'phone') : layout;
}
export const getTheme = () => getSetting('theme') || 'dark';
export const setTheme = (value) => setSetting('theme', value);
export const getLayout = () => getSetting('layout') || 'auto';
export const setLayout = (value) => setSetting('layout', value);
export const getAccent = () => getSetting('accent') || 'ubuntu';
export const setAccent = (value) => setSetting('accent', value);
export function getCompletedIds() {
  const ids = new Set();
  for (const [date, day] of Object.entries(state?.days || {})) for (const id of day.done_ids || []) ids.add(`${date}:${id}`);
  return ids;
}
