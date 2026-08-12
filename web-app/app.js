import { initState, getTerm, getCompletedIds, getTermFallbackUsed, getTheme, setTheme,
  getLayout, setLayout, getAccent, setAccent, applySettings } from './js/state.js';
import { parseHash, onRouteChange } from './js/router.js';
import { configureMarked } from './js/md.js';
import { fmtShort } from './js/dates.js';
import { renderToday } from './js/views/today.js';
import { renderWeek } from './js/views/week.js';
import { renderCourse } from './js/views/course.js';
import { renderCourses } from './js/views/courseIndex.js';
import { renderShared } from './js/views/shared.js';
import { renderProgress } from './js/views/progress.js';
import { renderSearch } from './js/views/search.js';
import { initOffline } from './js/offline.js';

const viewHost = document.getElementById('view');
const todayPill = document.getElementById('today-pill');

function ctx() {
  return { term: getTerm(), completed: getCompletedIds() };
}

function highlight(name) {
  document.querySelectorAll('.nav-link').forEach((a) => {
    a.classList.toggle('active', a.getAttribute('data-route') === name);
  });
}

async function dispatch(route) {
  viewHost.textContent = '';
  highlight(route.name);
  try {
    switch (route.name) {
      case 'week':
        await renderWeek(viewHost, route.params.week || 1, ctx());
        break;
      case 'course':
        if (route.params.code) await renderCourse(viewHost, route.params.code, ctx());
        else await renderCourses(viewHost, ctx());
        break;
      case 'shared':
        await renderShared(viewHost);
        break;
      case 'progress':
        await renderProgress(viewHost, ctx());
        break;
      case 'search':
        await renderSearch(viewHost, ctx());
        break;
      case 'today':
      default:
        await renderToday(viewHost, ctx());
    }
  } catch (e) {
    const note = document.createElement('div');
    note.className = 'error-note';
    note.textContent = 'Render error: ' + (e && e.message ? e.message : String(e));
    viewHost.appendChild(note);
  }
}

async function boot() {
  configureMarked();
  if (todayPill) todayPill.textContent = fmtShort(new Date());
  viewHost.innerHTML = '<div class="loading-card" aria-live="polite">Loading your blueprint…</div>';
  let term;
  try { ({ term } = await initState()); }
  catch (error) {
    viewHost.innerHTML = '';
    const note = document.createElement('div'); note.className = 'error-note'; note.textContent = error.message || 'Blueprint failed to start.'; viewHost.append(note); return;
  }
  setupControls();
  initOffline();
  if (getTermFallbackUsed()) {
    const note = document.createElement('div');
    note.className = 'status-note warn-note';
    note.textContent =
      'Term data loaded from the built-in static fallback — live data unavailable. Serve the blueprint root (see RUN.md): python3 -m http.server 8000, then open http://localhost:8000/web-app/';
    viewHost.appendChild(note);
  }
  if (!term) {
    const note = document.createElement('div');
    note.className = 'error-note';
    note.textContent = 'Term data failed to load.';
    viewHost.appendChild(note);
    return;
  }
  onRouteChange((route) => dispatch(route));
  await dispatch(parseHash(location.hash));
}

function setupControls() {
  document.getElementById('search-button')?.addEventListener('click', () => { location.hash = '#/search'; });
  document.getElementById('theme-toggle')?.addEventListener('click', () => setTheme(getTheme() === 'dark' ? 'light' : 'dark'));
  const layout = document.getElementById('layout-toggle');
  layout?.addEventListener('click', async () => {
    const next = getLayout() === 'auto' ? 'phone' : getLayout() === 'phone' ? 'laptop' : 'auto';
    await setLayout(next); layout.textContent = next === 'auto' ? 'Auto' : next === 'phone' ? 'Phone' : 'Wide';
  });
  document.getElementById('accent-toggle')?.addEventListener('click', () => {
    const choices = ['ubuntu', 'teal', 'violet', 'cyan', 'lime']; setAccent(choices[(choices.indexOf(getAccent()) + 1) % choices.length]);
  });
  matchMedia('(min-width: 880px)').addEventListener?.('change', () => { if (getLayout() === 'auto') applySettings(); });
}

boot();
