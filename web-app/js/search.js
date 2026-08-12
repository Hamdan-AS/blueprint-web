import { COURSES, SHARED_FILES, breakdownUrl, courseFileUrl, displayFileName, sharedFileUrl } from './ids.js';
import { fetchMd } from './md.js';
import { manifestUrl } from './derive.js';
let cache;
const plain = (markdown) => markdown.replace(/```[\s\S]*?```/g, ' ').replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
  .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[#>*_`~|\[\]-]/g, ' ').replace(/\s+/g, ' ').trim();

function files(term) {
  const result = [];
  for (const course of term.courses) {
    const meta = COURSES[course];
    for (const file of meta.coreFiles) result.push({ title: displayFileName(file), course, type: 'Reference', path: courseFileUrl(course, file) });
    for (const file of meta.breakdownFiles || []) result.push({ title: displayFileName(file), course, type: 'Breakdown', path: breakdownUrl(course, file) });
    for (let week = 1; week <= term.calendar.teaching_weeks; week++) result.push({ title: `${course} Week ${week}`, course, week, type: 'Manifest', path: manifestUrl(course, week) });
  }
  for (const item of SHARED_FILES) result.push({ title: displayFileName(item.file), course: 'Shared', type: 'Shared', path: sharedFileUrl(item.file) });
  return result.filter((item) => item.path);
}

export async function buildSearchIndex(term, progress) {
  if (cache) return cache;
  const descriptors = files(term); let done = 0;
  const entries = await Promise.all(descriptors.map(async (item) => {
    const markdown = await fetchMd(item.path); progress?.(++done, descriptors.length);
    if (markdown == null) return null;
    const text = plain(markdown);
    return { ...item, markdown, text, haystack: `${item.title} ${item.course} ${text}`.toLowerCase() };
  }));
  cache = entries.filter(Boolean); return cache;
}

export function searchIndex(index, query, filters = {}) {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return index.filter((item) => !filters.course || filters.course === 'All' || item.course === filters.course)
    .filter((item) => !filters.type || filters.type === 'All' || item.type === filters.type)
    .filter((item) => terms.every((term) => item.haystack.includes(term)))
    .map((item) => {
      const positions = terms.map((term) => item.text.toLowerCase().indexOf(term)).filter((at) => at >= 0);
      const start = Math.max(0, (positions.length ? Math.min(...positions) : 0) - 70);
      const score = terms.reduce((sum, term) => sum + (item.title.toLowerCase().includes(term) ? 5 : 1), 0);
      return { ...item, score, excerpt: `${start ? '…' : ''}${item.text.slice(start, start + 220)}${start + 220 < item.text.length ? '…' : ''}` };
    }).sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
}
