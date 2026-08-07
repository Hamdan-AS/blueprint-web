import { getLedger, completedCount, getHistory, downloadState, importStateJson } from '../state.js';
import { getTotalsAll } from '../derive.js';
import { COURSES } from '../ids.js';
import { navigate } from '../router.js';
import { progressRing } from '../components/progressRing.js';
import { renderWeekHeatmap } from '../components/weekHeatmap.js';
import { renderSparkline } from '../components/sparkline.js';
import { currentStreak, last14Days } from '../history.js';

function statCard(label, value) {
  const card = document.createElement('div');
  card.className = 'stat';
  const v = document.createElement('div');
  v.className = 'stat-value';
  v.textContent = value;
  const l = document.createElement('div');
  l.className = 'stat-label';
  l.textContent = label;
  card.append(v, l);
  return card;
}

function flash(host, message) {
  const note = document.createElement('div');
  note.className = 'status-note';
  note.textContent = message;
  host.append(note);
  setTimeout(() => note.remove(), 2500);
}

function importControls(ctx, host) {
  const row = document.createElement('div');
  row.className = 'chip-row';

  const exportBtn = document.createElement('button');
  exportBtn.type = 'button';
  exportBtn.className = 'chip';
  exportBtn.textContent = 'Export';
  exportBtn.addEventListener('click', () => downloadState());

  const importBtn = document.createElement('button');
  importBtn.type = 'button';
  importBtn.className = 'chip';
  importBtn.textContent = 'Import';

  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json,application/json';
  input.style.display = 'none';
  input.addEventListener('change', async () => {
    const file = input.files && input.files[0];
    if (file) {
      try {
        const text = await file.text();
        const res = importStateJson(text);
        await renderProgress(host, ctx);
        flash(host, `Imported ${res.merged} new completions`);
      } catch (e) {
        flash(host, 'Import failed: ' + e.message);
      }
    }
    input.value = '';
  });
  importBtn.addEventListener('click', () => input.click());

  row.append(exportBtn, importBtn, input);
  return row;
}

export async function renderProgress(host, ctx) {
  host.textContent = '';
  const term = ctx.term;

  const header = document.createElement('div');
  header.className = 'view-header';
  const title = document.createElement('div');
  title.className = 'view-title';
  title.textContent = 'Progress';
  header.append(title);
  host.append(header);

  host.append(importControls(ctx, host));

  const history = getHistory();
  const grid = document.createElement('div');
  grid.className = 'stat-grid';
  grid.append(statCard('Completed', String(completedCount())));
  grid.append(statCard('Streak', String(currentStreak(history, new Date()))));
  grid.append(statCard('Courses', String(term.courses.length)));
  grid.append(statCard('Target weeks', String(term.calendar.teaching_weeks)));
  host.append(grid);

  const sparkSection = document.createElement('div');
  sparkSection.className = 'view-section';
  const sparkTitle = document.createElement('div');
  sparkTitle.className = 'section-title';
  sparkTitle.textContent = 'Last 14 days';
  sparkSection.append(sparkTitle);
  const sparkHost = document.createElement('div');
  sparkSection.append(sparkHost);
  host.append(sparkSection);
  renderSparkline(sparkHost, last14Days(history, new Date()));

  const byCourseSection = document.createElement('div');
  byCourseSection.className = 'view-section';
  const byCourseTitle = document.createElement('div');
  byCourseTitle.className = 'section-title';
  byCourseTitle.textContent = 'By course';
  byCourseSection.append(byCourseTitle);

  const totals = await getTotalsAll(term, ctx.completed);
  for (const code of term.courses) {
    const meta = COURSES[code];
    let total = 0;
    let done = 0;
    for (let w = 1; w <= term.calendar.teaching_weeks; w++) {
      const t = totals.get(`${code}-W${w}`);
      if (t) {
        total += t.total;
        done += t.done;
      }
    }
    const pct = total ? Math.round((done / total) * 100) : 0;
    const row = document.createElement('div');
    row.className = 'course-row';
    const dot = document.createElement('span');
    dot.className = 'course-dot';
    dot.style.setProperty('--dot', meta.accent);
    const name = document.createElement('span');
    name.className = 'course-name';
    name.textContent = meta.name;
    const ring = progressRing(pct, { size: 56, label: `${pct}%` });
    const num = document.createElement('span');
    num.className = 'progress-num';
    num.textContent = `${done}/${total}`;
    row.append(dot, name, ring, num);
    byCourseSection.append(row);
  }
  host.append(byCourseSection);

  const ledgerSection = document.createElement('div');
  ledgerSection.className = 'view-section';
  const ledgerTitle = document.createElement('div');
  ledgerTitle.className = 'section-title';
  ledgerTitle.textContent = 'Ledger';
  ledgerSection.append(ledgerTitle);

  const ledger = getLedger();
  for (const code of term.courses) {
    const meta = COURSES[code];
    const entry = ledger[code] || {};
    const owed = entry.owed || 0;
    const row = document.createElement('div');
    row.className = 'ledger-row';
    const name = document.createElement('span');
    name.className = 'ledger-course';
    name.textContent = `${meta.code} ${meta.name}`;
    const owedEl = document.createElement('span');
    owedEl.className = `ledger-owed ${owed > 0 ? 'warn' : 'ok'}`;
    owedEl.textContent = owed > 0 ? `${owed} h owed` : '0 owed';
    row.append(name, owedEl);
    ledgerSection.append(row);
  }
  host.append(ledgerSection);

  const heatSection = document.createElement('div');
  heatSection.className = 'view-section';
  const heatTitle = document.createElement('div');
  heatTitle.className = 'section-title';
  heatTitle.textContent = 'Term heatmap';
  heatSection.append(heatTitle);
  const heatHost = document.createElement('div');
  heatSection.append(heatHost);
  host.append(heatSection);
  await renderWeekHeatmap(heatHost, {
    term,
    completed: ctx.completed,
    onSelect: (c, w) => navigate(`#/week/${w}`),
  });
}
