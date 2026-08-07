import { COURSES, courseFileUrl, breakdownUrl } from '../ids.js';
import { loadManifest, getTotalsAll } from '../derive.js';
import { openMarkdownModal } from '../components/markdownModal.js';

function makeChip(text) {
  const chip = document.createElement('span');
  chip.className = 'chip';
  chip.textContent = text;
  return chip;
}

function makeChipLink(code, active) {
  const a = document.createElement('a');
  a.className = 'chip' + (active ? ' active' : '');
  a.href = `#/course/${code}`;
  a.textContent = code;
  return a;
}

function sectionTitle(text) {
  const el = document.createElement('div');
  el.className = 'section-title';
  el.textContent = text;
  return el;
}

function fileRow(file, onClick) {
  const btn = document.createElement('button');
  btn.className = 'file-row';
  const name = document.createElement('span');
  name.className = 'file-name';
  name.textContent = file;
  btn.append(name);
  btn.addEventListener('click', onClick);
  return btn;
}

export async function renderCourse(host, code, ctx) {
  host.textContent = '';
  const term = ctx.term;
  const meta = COURSES[code];

  if (!meta) {
    const note = document.createElement('div');
    note.className = 'error-note';
    note.textContent = 'Unknown course.';
    host.append(note);
    return;
  }

  const header = document.createElement('div');
  header.className = 'view-header';
  const dot = document.createElement('span');
  dot.className = 'course-dot';
  dot.style.setProperty('--dot', meta.accent);
  const title = document.createElement('div');
  title.className = 'view-title';
  title.textContent = meta.name;
  const sub = document.createElement('div');
  sub.className = 'view-sub';
  sub.textContent = meta.code;
  header.append(dot, title, sub);
  host.append(header);

  const switcher = document.createElement('div');
  switcher.className = 'chip-row';
  for (const other of term.courses || Object.keys(COURSES)) {
    switcher.append(makeChipLink(other, other === code));
  }
  host.append(switcher);

  const chips = document.createElement('div');
  chips.className = 'chip-row';
  chips.append(makeChip(`Slots: ${[...meta.aDays, ...meta.bDays].join(', ')}`));
  chips.append(makeChip(`Labs: ${term.lab_courses && term.lab_courses.includes(code) ? 'Yes' : 'No'}`));
  chips.append(makeChip(`Load tier: ${(term.load_tiers && term.load_tiers[code]) || 'n/a'}`));
  host.append(chips);

  const coreSection = document.createElement('div');
  coreSection.className = 'view-section';
  coreSection.append(sectionTitle('Core files'));
  for (const file of meta.coreFiles) {
    coreSection.append(fileRow(file, () => openMarkdownModal({ title: file, path: courseFileUrl(code, file) })));
  }
  host.append(coreSection);

  if (meta.breakdownDir) {
    const brSection = document.createElement('div');
    brSection.className = 'view-section';
    brSection.append(sectionTitle('Breakdowns'));
    for (const file of meta.breakdownFiles) {
      brSection.append(fileRow(file, () => openMarkdownModal({ title: file, path: breakdownUrl(code, file) })));
    }
    host.append(brSection);
  }

  const progSection = document.createElement('div');
  progSection.className = 'view-section';
  progSection.append(sectionTitle('Week progress (1–14)'));

  const totals = await getTotalsAll(term, ctx.completed);
  const manifests = await Promise.all(
    Array.from({ length: 14 }, (_, i) => loadManifest(code, i + 1))
  );
  for (let w = 1; w <= 14; w++) {
    const t = totals.get(`${code}-W${w}`) || { total: 0, done: 0 };
    const manifest = manifests[w - 1];
    const row = document.createElement('a');
    row.className = 'course-row';
    row.href = `#/week/${w}`;
    row.style.textDecoration = 'none';
    row.style.color = 'inherit';
    const weekNum = document.createElement('span');
    weekNum.className = 'week-num';
    weekNum.textContent = `W${w}`;
    const rowTitle = document.createElement('span');
    rowTitle.className = 'row-title';
    rowTitle.textContent = manifest.ok ? manifest.title : `Week ${w}`;
    const barWrap = document.createElement('div');
    barWrap.className = 'progress-bar';
    const fill = document.createElement('div');
    fill.className = 'progress-fill';
    fill.style.width = `${t.total ? Math.round((t.done / t.total) * 100) : 0}%`;
    barWrap.append(fill);
    const num = document.createElement('span');
    num.className = 'progress-num';
    num.textContent = `${t.done}/${t.total}`;
    row.append(weekNum, rowTitle, barWrap, num);
    progSection.append(row);
  }
  host.append(progSection);
}
