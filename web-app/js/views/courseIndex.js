import { COURSES, courseFileUrl, breakdownUrl, displayFileName } from '../ids.js';
import { openMarkdownModal } from '../components/markdownModal.js';
import { completionByCourseWeek } from '../analytics.js';
import { getState } from '../state.js';

function fileRow(file, onClick) {
  const btn = document.createElement('button');
  btn.className = 'file-row';
  const name = document.createElement('span');
  name.className = 'file-name';
  name.textContent = displayFileName(file);
  btn.title = file;
  btn.append(name);
  btn.addEventListener('click', onClick);
  return btn;
}

export async function renderCourses(host, ctx) {
  host.textContent = '';
  const term = ctx.term;
  const codes = term.courses || Object.keys(COURSES);
  let openCode = null;

  const header = document.createElement('div');
  header.className = 'view-header';
  const headRow = document.createElement('div');
  headRow.className = 'view-head-row';
  const titleBlock = document.createElement('div');
  const title = document.createElement('div');
  title.className = 'view-title';
  title.textContent = 'Courses';
  const sub = document.createElement('div');
  sub.className = 'view-sub';
  sub.textContent = `Fall 2026 · ${codes.length} courses`;
  titleBlock.append(title, sub);
  const collapseBtn = document.createElement('button');
  collapseBtn.type = 'button';
  collapseBtn.className = 'chip collapse-all';
  collapseBtn.textContent = 'Collapse all';
  collapseBtn.addEventListener('click', () => {
    openCode = null;
    for (const a of list.querySelectorAll('.course-acc')) {
      const b = a.querySelector('.course-acc-body');
      const c = a.querySelector('.course-caret');
      const h = a.querySelector('.course-acc-head');
      b.hidden = true;
      c.textContent = '▸';
      h.classList.remove('active');
      h.setAttribute('aria-expanded', 'false');
    }
  });
  headRow.append(titleBlock, collapseBtn);
  header.append(headRow);
  host.append(header);

  const list = document.createElement('div');
  list.className = 'view-section';

  const totals = completionByCourseWeek(term, getState());

  for (const code of codes) {
    const meta = COURSES[code];
    if (!meta) continue;

    let total = 0;
    let done = 0;
    for (let w = 1; w <= term.calendar.teaching_weeks; w++) {
      const t = totals.get(`${code}-W${w}`);
      if (t) {
        total += t.total;
        done += t.done;
      }
    }

    const acc = document.createElement('div');
    acc.className = 'course-acc';

    const head = document.createElement('button');
    head.type = 'button';
    head.className = 'course-acc-head';
    head.setAttribute('aria-expanded', 'false');
    const dot = document.createElement('span');
    dot.className = 'course-dot';
    dot.style.setProperty('--dot', meta.accent);
    const name = document.createElement('span');
    name.className = 'course-name';
    name.textContent = meta.name;
    const codeEl = document.createElement('span');
    codeEl.className = 'course-code';
    codeEl.textContent = meta.code;
    const caret = document.createElement('span');
    caret.className = 'course-caret';
    caret.textContent = '▸';
    head.append(dot, name, codeEl, caret);
    head.addEventListener('click', () => {
      const willOpen = openCode !== code;
      openCode = willOpen ? code : null;
      for (const a of list.querySelectorAll('.course-acc')) {
        const isThis = a === acc;
        const b = a.querySelector('.course-acc-body');
        const c = a.querySelector('.course-caret');
        const h = a.querySelector('.course-acc-head');
        b.hidden = !(isThis && willOpen);
        c.textContent = isThis && willOpen ? '▾' : '▸';
        h.classList.toggle('active', isThis && willOpen);
        h.setAttribute('aria-expanded', String(isThis && willOpen));
      }
    });

    const body = document.createElement('div');
    body.className = 'course-acc-body';
    body.hidden = true;

    const metaRow = document.createElement('div');
    metaRow.className = 'course-acc-meta';
    const slots = [...meta.aDays, ...meta.bDays].join(', ') || '—';
    const info = document.createElement('span');
    info.className = 'course-info';
    info.textContent = `Slots: ${slots} · Labs: ${term.lab_courses && term.lab_courses.includes(code) ? 'Yes' : 'No'} · Load: ${(term.load_tiers && term.load_tiers[code]) || 'n/a'}`;
    const barWrap = document.createElement('div');
    barWrap.className = 'progress-bar';
    const fill = document.createElement('div');
    fill.className = 'progress-fill';
    fill.style.width = `${total ? Math.round((done / total) * 100) : 0}%`;
    barWrap.append(fill);
    const num = document.createElement('span');
    num.className = 'progress-num';
    num.textContent = `${done}/${total}`;
    metaRow.append(info, barWrap, num);
    body.append(metaRow);

    const coreTitle = document.createElement('div');
    coreTitle.className = 'section-title';
    coreTitle.textContent = 'Core files';
    body.append(coreTitle);
    for (const file of meta.coreFiles) {
      body.append(fileRow(file, () => openMarkdownModal({ title: file, path: courseFileUrl(code, file) })));
    }
    if (meta.breakdownDir) {
      const brTitle = document.createElement('div');
      brTitle.className = 'section-title';
      brTitle.textContent = 'Breakdowns';
      body.append(brTitle);
      for (const file of meta.breakdownFiles) {
        body.append(fileRow(file, () => openMarkdownModal({ title: file, path: breakdownUrl(code, file) })));
      }
    }
    const viewLink = document.createElement('a');
    viewLink.className = 'chip course-view';
    viewLink.href = `#/course/${code}`;
    viewLink.textContent = `Open ${code} page →`;
    body.append(viewLink);

    acc.append(head, body);
    list.append(acc);
  }
  host.append(list);
}
