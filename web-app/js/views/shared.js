import { SHARED_FILES, sharedFileUrl } from '../ids.js';
import { openMarkdownModal } from '../components/markdownModal.js';

function fileRow(f) {
  const btn = document.createElement('button');
  btn.className = 'file-row';
  const name = document.createElement('span');
  name.className = 'file-name';
  name.textContent = f.file;
  btn.append(name);
  if (f.pinned) {
    const tag = document.createElement('span');
    tag.className = 'pinned-tag';
    tag.textContent = 'Pinned';
    btn.append(tag);
  }
  if (f.legacy) {
    const tag = document.createElement('span');
    tag.className = 'legacy-tag';
    tag.textContent = 'Legacy';
    btn.append(tag);
  }
  btn.addEventListener('click', () => openMarkdownModal({ title: f.file, path: sharedFileUrl(f.file) }));
  return btn;
}

export async function renderShared(host) {
  host.textContent = '';

  const header = document.createElement('div');
  header.className = 'view-header';
  const title = document.createElement('div');
  title.className = 'view-title';
  title.textContent = 'Shared files';
  const sub = document.createElement('div');
  sub.className = 'view-sub';
  sub.textContent = 'Term-level strategy & references';
  header.append(title, sub);
  host.append(header);

  const pinned = SHARED_FILES.filter((f) => f.pinned);
  const rest = SHARED_FILES.filter((f) => !f.pinned);

  const pinnedSection = document.createElement('div');
  pinnedSection.className = 'view-section';
  const pinnedTitle = document.createElement('div');
  pinnedTitle.className = 'section-title';
  pinnedTitle.textContent = 'Pinned';
  pinnedSection.append(pinnedTitle);
  for (const f of pinned) pinnedSection.append(fileRow(f));
  host.append(pinnedSection);

  const allSection = document.createElement('div');
  allSection.className = 'view-section';
  const allTitle = document.createElement('div');
  allTitle.className = 'section-title';
  allTitle.textContent = 'All files';
  allSection.append(allTitle);
  for (const f of rest) allSection.append(fileRow(f));
  host.append(allSection);
}
