import { isBlockDone, toggleBlock } from '../state.js';

const INFO_SVG =
  '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">' +
  '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/>' +
  '<path d="M12 11v5M12 8v.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' +
  '</svg>';

function focusNext(current) {
  const root = current.parentElement;
  if (!root || !root.querySelectorAll) return;
  const rows = root.querySelectorAll('.check');
  let idx = -1;
  for (let i = 0; i < rows.length; i++) {
    if (rows[i] === current) { idx = i; break; }
  }
  if (idx < 0) return;
  const next = rows[idx + 1] || rows[0];
  if (next && next.focus) next.focus();
}

export function renderChecklistItem(item, opts = {}) {
  const date = opts.date;
  const done = isBlockDone(date, item.id);

  const label = document.createElement('label');
  label.className = 'check' + (done ? ' done' : '');
  label.tabIndex = 0;
  label.setAttribute('role', 'checkbox');
  label.setAttribute('aria-checked', String(done));

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.checked = done;
  input.setAttribute('tabindex', '-1');

  const checkLabel = document.createElement('span');
  checkLabel.className = 'check-label';
  checkLabel.textContent = item.label || '';

  const meta = document.createElement('span');
  meta.className = 'check-meta';
  meta.textContent = item.section || '';

  const detail = document.createElement('button');
  detail.type = 'button';
  detail.className = 'check-detail';
  detail.setAttribute('aria-label', 'Details');
  detail.innerHTML = INFO_SVG;

  function refresh() {
    const now = isBlockDone(date, item.id);
    label.classList.toggle('done', now);
    input.checked = now;
    label.setAttribute('aria-checked', String(now));
  }

  function doToggle() {
    toggleBlock(date, { id: item.id, label: item.label, course: item.course }, []);
    refresh();
    focusNext(label);
  }

  input.addEventListener('change', doToggle);

  label.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      doToggle();
    } else if (e.key === 'e' || e.key === 'E' || e.key === 'd' || e.key === 'D') {
      e.preventDefault();
      if (opts.onDetail) opts.onDetail(item);
    }
  });

  detail.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (opts.onDetail) opts.onDetail(item);
  });

  label.appendChild(input);
  label.appendChild(checkLabel);
  label.appendChild(meta);
  label.appendChild(detail);

  return label;
}
