const marked = globalThis.window?.marked;

export function configureMarked() {
  if (!marked) return;
  marked.setOptions({ gfm: true, breaks: true });
}

export function renderMarkdown(text) {
  if (!text) return '';
  if (marked && typeof marked.parse === 'function') return sanitizeHtml(marked.parse(text));
  return `<pre>${escapeHtml(text)}</pre>`;
}

export function sanitizeHtml(html) {
  if (typeof DOMParser === 'undefined') return escapeHtml(html);
  const parsed = new DOMParser().parseFromString(String(html), 'text/html');
  for (const node of parsed.querySelectorAll('script,style,iframe,object,embed,link,meta,form,button')) node.remove();
  for (const node of parsed.body.querySelectorAll('*')) {
    for (const attribute of [...node.attributes]) {
      if (attribute.name.toLowerCase().startsWith('on') || ['style', 'srcdoc'].includes(attribute.name.toLowerCase())) node.removeAttribute(attribute.name);
    }
    for (const name of ['href', 'src']) {
      const value = node.getAttribute(name);
      if (!value) continue;
      const compact = value.replace(/[\u0000-\u0020]/g, '').toLowerCase();
      const safeScheme = compact.startsWith('http://') || compact.startsWith('https://') || (name === 'href' && compact.startsWith('mailto:'));
      const relative = !/^[a-z][a-z0-9+.-]*:/i.test(compact);
      if (!safeScheme && !relative) node.removeAttribute(name);
    }
    if (node.tagName === 'INPUT') {
      if (node.getAttribute('type') !== 'checkbox') node.remove();
      else node.setAttribute('disabled', '');
    }
    if (node.tagName === 'A' && /^https?:/i.test(node.getAttribute('href') || '')) {
      node.target = '_blank'; node.rel = 'noopener noreferrer';
    }
  }
  return parsed.body.innerHTML;
}

export function resolveMarkdownLinks(container, basePath) {
  if (!container || !basePath) return;
  let base;
  try { base = new URL(basePath, location.href); } catch (_) { return; }
  for (const node of container.querySelectorAll('a[href],img[src]')) {
    const name = node.tagName === 'IMG' ? 'src' : 'href';
    const value = node.getAttribute(name);
    if (!value || value.startsWith('#') || /^[a-z][a-z0-9+.-]*:/i.test(value)) continue;
    try { node.setAttribute(name, new URL(value, base).href); } catch (_) { /* ignored */ }
  }
}

function slug(value, used) {
  const base = value.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') || 'section';
  const count = used.get(base) || 0;
  used.set(base, count + 1);
  return count ? `${base}-${count + 1}` : base;
}

function labelMetadata(paragraph) {
  const label = paragraph.querySelector(':scope > strong:first-child')?.textContent.trim().toLowerCase();
  if (label === 'resources:') paragraph.classList.add('fear-pack-meta', 'fear-pack-resources');
  if (label === 'schedule:') paragraph.classList.add('fear-pack-meta', 'fear-pack-schedule');
}

function decorateFearKiller(container, basePath) {
  const source = String(basePath || '').split(/[?#]/)[0];
  const documentTitle = container.querySelector('h1')?.textContent.trim().toUpperCase();
  if (!source.endsWith('/Fear-Killer-Packs.md') && documentTitle !== 'FEAR-KILLER-PACKS') return;

  container.classList.add('fear-killer-doc');
  const packHeadings = [...container.querySelectorAll('h3')];
  const firstPack = packHeadings[0];

  if (firstPack) {
    const intro = document.createElement('header');
    intro.className = 'fear-killer-intro';
    firstPack.before(intro);
    while (container.firstChild && container.firstChild !== intro) intro.append(container.firstChild);
    intro.querySelector('h1')?.classList.add('fear-killer-title');
    intro.querySelector('h2')?.classList.add('fear-killer-course');
    for (const paragraph of intro.querySelectorAll('p')) labelMetadata(paragraph);
  }

  for (const heading of packHeadings) {
    const pack = document.createElement('section');
    const isExam = /(?:midterm|final).*exam|exam\s+week/i.test(heading.textContent);
    pack.className = `fear-pack${isExam ? ' fear-exam-pack' : ''}`;
    heading.before(pack);
    pack.append(heading);

    let sibling = pack.nextSibling;
    while (sibling && !(sibling.nodeType === 1 && sibling.tagName === 'H3')) {
      const next = sibling.nextSibling;
      pack.append(sibling);
      sibling = next;
    }

    for (const paragraph of pack.querySelectorAll(':scope > p')) labelMetadata(paragraph);
    for (const list of pack.querySelectorAll(':scope > ol')) {
      list.classList.add('fear-questions');
      for (const question of list.children) {
        if (question.tagName === 'LI') question.classList.add('fear-question');
      }
    }
    const questionCount = pack.querySelectorAll(':scope > .fear-questions > .fear-question').length;
    pack.setAttribute('aria-label', isExam ? heading.textContent.trim() : `${heading.textContent.trim()}, ${questionCount} questions`);
  }
}

export function decorateMarkdown(container, basePath) {
  if (!container) return [];
  resolveMarkdownLinks(container, basePath);
  for (const table of [...container.querySelectorAll('table')]) {
    if (table.parentElement?.classList.contains('md-table-scroll')) continue;
    const scroll = document.createElement('div');
    scroll.className = 'md-table-scroll';
    scroll.tabIndex = 0;
    scroll.setAttribute('role', 'region');
    scroll.setAttribute('aria-label', 'Scrollable table');
    table.before(scroll); scroll.append(table);
  }
  for (const image of container.querySelectorAll('img')) {
    image.loading = 'lazy'; image.decoding = 'async';
    if (!image.alt) image.alt = 'Course material image';
  }
  for (const item of container.querySelectorAll('li')) {
    if (item.querySelector(':scope > input[type="checkbox"]')) item.classList.add('task-list-item');
  }
  decorateFearKiller(container, basePath);
  const used = new Map();
  return [...container.querySelectorAll('h1,h2,h3')].map((heading) => {
    if (!heading.id) heading.id = slug(heading.textContent, used);
    heading.tabIndex = -1;
    return { id: heading.id, level: Number(heading.tagName.slice(1)), text: heading.textContent.trim() };
  });
}

export function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function fetchMd(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) return null;
    return await res.text();
  } catch (e) {
    return null;
  }
}

export function parseSections(text) {
  const lines = text.split('\n');
  let title = '';
  let dates = '';
  let declaredWeek = null;
  const sections = {};
  const pairs = [];

  if (lines.length && lines[0].startsWith('#')) {
    title = lines[0].replace(/^#+\s*/, '').trim();
  }
  const dm = /^\*\*Dates:\*\*\s*(.+)$/m.exec(text);
  if (dm) dates = dm[1].trim();
  const wm = /^\*\*Week:\*\*\s*(\d+)$/m.exec(text);
  if (wm) declaredWeek = parseInt(wm[1], 10);

  let header = null;
  let buf = [];
  const flush = () => {
    if (header !== null) {
      const body = buf.join('\n').trim();
      pairs.push([header, body]);
      if (!(header in sections)) sections[header] = body;
    }
  };
  for (const line of lines) {
    if (/^##\s+/.test(line)) {
      flush();
      header = line.replace(/^##\s+/, '').trim();
      buf = [];
    } else {
      buf.push(line);
    }
  }
  flush();

  return { title, dates, declaredWeek, sections, pairs };
}

export function findSection(pairs, prefix) {
  let first = null;
  for (const [key, body] of pairs) {
    if (key.startsWith(prefix)) {
      if (!first) first = { key, body };
      else return { key: first.key, body: first.body, dup: true };
    }
  }
  return first || null;
}

export function bulletLines(body) {
  const out = [];
  for (const line of body.split('\n')) {
    const s = line.trim();
    if (s.startsWith('- ')) out.push(s.slice(2).trim());
  }
  return out;
}

export function checkboxLines(body) {
  const out = [];
  for (const line of body.split('\n')) {
    const s = line.trim();
    const m = /^-\s*\[\s*[ xX]?\s*\]\s*(.*)$/.exec(s);
    if (m) out.push(m[1].trim());
  }
  return out;
}
