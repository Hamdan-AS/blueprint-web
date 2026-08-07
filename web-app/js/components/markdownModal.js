import { fetchMd, renderMarkdown } from '../md.js';
import { openDrawer } from './detailDrawer.js';

function mdContent(text) {
  const wrap = document.createElement('div');
  wrap.className = 'md-content';
  wrap.innerHTML = renderMarkdown(text);
  return wrap;
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
    content = text == null ? notAvailable() : mdContent(text);
  } else {
    content = mdContent(markdown);
  }

  openDrawer({ title: title || '', subtitle: path || '', content });

  const body = content.parentElement;
  if (body) {
    const guard = (e) => {
      const a = e.target && e.target.closest ? e.target.closest('a') : null;
      if (a && /\.md(?:#.*)?$/.test(a.getAttribute('href') || '')) {
        e.preventDefault();
      }
    };
    body.addEventListener('click', guard);
  }

  return content;
}
