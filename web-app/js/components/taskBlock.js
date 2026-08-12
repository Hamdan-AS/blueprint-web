import { isBlockDone, toggleBlock } from '../state.js';

export function renderTaskBlock(block, { date, blocks, onDetail, onChanged }) {
  const row = document.createElement('div');
  row.className = `task-block prio-${block.prio.toLowerCase()}`;
  row.tabIndex = 0;
  row.setAttribute('role', 'checkbox');
  const check = document.createElement('button');
  check.type = 'button'; check.className = 'task-check';
  const content = document.createElement('button');
  content.type = 'button'; content.className = 'task-content';
  const title = document.createElement('span');
  title.className = 'task-title'; title.textContent = block.display;
  const meta = document.createElement('span');
  meta.className = 'task-meta';
  meta.textContent = `${block.prio} · ${block.minutes} min${block.course !== '-' ? ` · ${block.course === 'rev' ? 'Review' : block.course}` : ''}`;
  content.append(title, meta);
  const refresh = () => {
    const done = isBlockDone(date, block.id);
    row.classList.toggle('done', done); row.setAttribute('aria-checked', String(done));
    check.textContent = done ? '✓' : '';
    check.setAttribute('aria-label', `${done ? 'Mark incomplete' : 'Mark complete'}: ${block.display}`);
  };
  const change = async () => {
    check.disabled = true;
    await toggleBlock(date, block, blocks);
    refresh(); check.disabled = false; onChanged?.(block);
  };
  check.addEventListener('click', change);
  content.addEventListener('click', () => onDetail?.(block));
  row.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); change(); }
    else if (event.key.toLowerCase() === 'e') { event.preventDefault(); onDetail?.(block); }
  });
  row.append(check, content); refresh(); return row;
}
