import { buildSearchIndex, searchIndex } from '../search.js';
import { openMarkdownModal } from '../components/markdownModal.js';
const el = (tag, cls, text) => { const node = document.createElement(tag); if (cls) node.className = cls; if (text != null) node.textContent = text; return node; };
function makeSelect(label, values) {
  const wrap = el('label', 'search-filter'); wrap.append(el('span', null, label));
  const input = el('select');
  for (const value of values) { const option = el('option', null, value); option.value = value; input.append(option); }
  wrap.append(input); return { wrap, input };
}
export async function renderSearch(host, ctx) {
  host.textContent = '';
  const header = el('header', 'view-header');
  header.append(el('h1', 'view-title', 'Search'), el('p', 'view-sub', 'Find topics across manifests, course books, and shared strategy files'));
  const form = el('form', 'search-form');
  const query = el('input', 'search-input'); query.type = 'search'; query.placeholder = 'Try “pipeline hazards” or “Bayes”…'; query.setAttribute('aria-label', 'Search blueprint content');
  const course = makeSelect('Course', ['All', ...ctx.term.courses, 'Shared']);
  const type = makeSelect('Type', ['All', 'Manifest', 'Reference', 'Breakdown', 'Shared']);
  const submit = el('button', 'chip active', 'Search'); submit.type = 'submit';
  form.append(query, course.wrap, type.wrap, submit);
  const status = el('p', 'view-sub', 'Building search index…'); const results = el('div', 'search-results');
  host.append(header, form, status, results);
  const index = await buildSearchIndex(ctx.term, (done, total) => { status.textContent = `Indexing ${done}/${total} files…`; });
  status.textContent = `${index.length} documents ready`;
  const run = () => {
    results.textContent = '';
    const found = searchIndex(index, query.value, { course: course.input.value, type: type.input.value });
    status.textContent = query.value.trim() ? `${found.length} result${found.length === 1 ? '' : 's'}` : `${index.length} documents ready`;
    if (query.value.trim() && !found.length) results.append(el('div', 'empty', 'No matching content. Try fewer words or another filter.'));
    for (const item of found.slice(0, 80)) {
      const button = el('button', 'search-result');
      const top = el('span', 'search-result-top'); top.append(el('strong', null, item.title), el('span', 'badge', `${item.course} · ${item.type}`));
      button.append(top, el('span', 'search-excerpt', item.excerpt));
      button.addEventListener('click', () => openMarkdownModal({ title: item.title, path: item.path, markdown: item.markdown }));
      results.append(button);
    }
  };
  form.addEventListener('submit', (event) => { event.preventDefault(); run(); });
  course.input.addEventListener('change', run); type.input.addEventListener('change', run); query.focus();
}
