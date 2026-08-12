import { fetchMd, renderMarkdown, decorateMarkdown } from '../md.js';
import { openDrawer } from './detailDrawer.js';

function mdContent(text, path) {
  const reader = document.createElement('div');
  reader.className = 'md-reader';
  const wrap = document.createElement('div');
  wrap.className = 'md-content';
  wrap.innerHTML = renderMarkdown(text);
  const headings = decorateMarkdown(wrap, path);

  const tools = document.createElement('div');
  tools.className = 'reader-tools';
  const count = document.createElement('span');
  count.className = 'reader-count';
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length.toLocaleString();
  const packCount = wrap.querySelectorAll('.fear-pack:not(.fear-exam-pack)').length;
  count.textContent = packCount ? `${packCount} packs · ${wordCount} words` : `${wordCount} words`;
  const wrapCode = document.createElement('button');
  wrapCode.type = 'button';
  wrapCode.className = 'reader-tool';
  wrapCode.textContent = 'Wrap code';
  wrapCode.setAttribute('aria-pressed', 'false');
  wrapCode.addEventListener('click', () => {
    const active = reader.classList.toggle('wrap-code');
    wrapCode.setAttribute('aria-pressed', String(active));
    wrapCode.textContent = active ? 'Scroll code' : 'Wrap code';
  });
  tools.append(count, wrapCode);
  reader.append(tools);

  if (headings.length > 2) {
    const toc = document.createElement('details');
    toc.className = 'reader-toc';
    const summary = document.createElement('summary');
    summary.textContent = `Contents · ${headings.length} sections`;
    const links = document.createElement('nav');
    links.setAttribute('aria-label', 'Document contents');
    for (const heading of headings) {
      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.className = `toc-level-${heading.level}`;
      link.textContent = heading.text;
      link.addEventListener('click', (event) => {
        event.preventDefault();
        wrap.querySelector(`#${CSS.escape(heading.id)}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      links.append(link);
    }
    toc.append(summary, links); reader.append(toc);
  }
  reader.append(wrap);
  return reader;
}

function notAvailable() {
  const wrap = document.createElement('div');
  wrap.className = 'error-note';
  wrap.textContent = 'Content not available';
  return wrap;
}

export async function openMarkdownModal({ title, path, markdown }) {
  let content;
  if (!markdown && path) {
    const text = await fetchMd(path);
    content = text == null ? notAvailable() : mdContent(text, path);
  } else {
    content = mdContent(markdown, path);
  }

  openDrawer({ title: title || '', subtitle: path || '', content });

  const body = content.parentElement;
  if (body) {
    const guard = (e) => {
      const a = e.target && e.target.closest ? e.target.closest('a') : null;
      if (a && /\.md(?:#.*)?$/.test(a.getAttribute('href') || '')) {
        e.preventDefault();
        openMarkdownModal({ title: a.textContent.trim() || 'Reference', path: a.href });
      }
    };
    body.addEventListener('click', guard);
  }

  return content;
}
