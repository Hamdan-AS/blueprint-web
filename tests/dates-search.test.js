import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve, toDate, weekDateRange } from '../web-app/js/dates.js';
import { searchIndex } from '../web-app/js/search.js';

const term = JSON.parse(readFileSync(new URL('../terms/2026-fall/term.json', import.meta.url)));

test('calendar phases cover teaching variants, final revision, and exams', () => {
  assert.equal(resolve(toDate('2026-08-11'), term).phase, 'pre-semester');
  assert.deepEqual([resolve(toDate('2026-10-05'), term).week, resolve(toDate('2026-10-05'), term).variant], [8, 'wk8-exam']);
  assert.deepEqual([resolve(toDate('2026-10-12'), term).week, resolve(toDate('2026-10-12'), term).variant], [9, 'wk9-recovery']);
  assert.equal(resolve(toDate('2026-11-23'), term).phase, 'final-revision');
  assert.equal(resolve(toDate('2026-11-30'), term).phase, 'exam-window');
  assert.equal(resolve(toDate('2026-12-19'), term).phase, 'post-exam');
  assert.equal(weekDateRange(15, term).end.toDateString(), toDate('2026-11-29').toDateString());
});

test('search uses all terms and respects filters', () => {
  const index = [
    { title: 'Pipeline Hazards', course: 'CA', type: 'Manifest', text: 'Data forwarding and stalls', haystack: 'pipeline hazards ca data forwarding and stalls' },
    { title: 'Probability', course: 'PS', type: 'Reference', text: 'Bayes theorem', haystack: 'probability ps bayes theorem' },
  ];
  assert.equal(searchIndex(index, 'pipeline forwarding').length, 1);
  assert.equal(searchIndex(index, 'bayes', { course: 'CA' }).length, 0);
  assert.equal(searchIndex(index, 'bayes', { course: 'PS', type: 'Reference' })[0].title, 'Probability');
});
