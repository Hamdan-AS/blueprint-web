import { escapeHtml } from '../md.js';

export function progressRing(percent, opts = {}) {
  const p = Math.max(0, Math.min(100, Number(percent) || 0));
  const size = opts.size || 64;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'ring');
  svg.setAttribute('width', String(size));
  svg.setAttribute('height', String(size));
  svg.setAttribute('viewBox', '0 0 42 42');

  let inner =
    '<circle cx="21" cy="21" r="15.9" fill="none" stroke="var(--surface-2)" stroke-width="4"/>' +
    '<circle cx="21" cy="21" r="15.9" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" stroke-dasharray="100" stroke-dashoffset="' +
    String(100 - p) +
    '"/>';
  if (opts.label) {
    inner +=
      '<text class="ring-text" x="21" y="24.5" text-anchor="middle" fill="currentColor" font-size="8" font-weight="600">' +
      escapeHtml(opts.label) +
      '</text>';
  }
  svg.innerHTML = inner;
  return svg;
}
