const marked = window.marked;

export function configureMarked() {
  if (!marked) return;
  marked.setOptions({ gfm: true, breaks: true });
}

export function renderMarkdown(text) {
  if (!text) return '';
  if (marked && typeof marked.parse === 'function') return marked.parse(text);
  return `<pre>${escapeHtml(text)}</pre>`;
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
