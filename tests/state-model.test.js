import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dayStack } from '../web-app/js/derive.js';
import {
  completePackState, completeReviewState, createState, finalizeLedgerState,
  reviewsForDate, toggleBlockState,
} from '../web-app/js/stateModel.js';

const term = JSON.parse(readFileSync(new URL('../terms/2026-fall/term.json', import.meta.url)));

test('day completion is isolated by date even for stable block IDs', () => {
  const state = createState(term);
  const blocks = dayStack(1, 'Mon', term).blocks;
  toggleBlockState(state, '2026-08-17', blocks[0], blocks, new Date('2026-08-17T12:00:00Z'));
  assert.deepEqual(state.days['2026-08-17'].done_ids, [blocks[0].id]);
  assert.equal(state.days['2026-08-18'], undefined);
  toggleBlockState(state, '2026-08-17', blocks[0], blocks, new Date('2026-08-17T12:01:00Z'));
  assert.deepEqual(state.days['2026-08-17'].done_ids, []);
});

test('ledger finalization is idempotent', () => {
  const state = createState(term);
  finalizeLedgerState(state, '2026-08-25', term, dayStack);
  const once = structuredClone(state.ledger);
  const marker = state.finalized_through;
  finalizeLedgerState(state, '2026-08-25', term, dayStack);
  assert.deepEqual(state.ledger, once);
  assert.equal(state.finalized_through, marker);
});

test('first launch after recovery never resurrects W1-W9 debt', () => {
  const gap = createState(term);
  finalizeLedgerState(gap, '2026-10-20', term, dayStack);

  const reference = createState(term);
  finalizeLedgerState(reference, '2026-10-19', term, dayStack);
  finalizeLedgerState(reference, '2026-10-20', term, dayStack);
  assert.equal(gap.wk9_cleared, true);
  assert.deepEqual(gap.ledger, reference.ledger);
});

test('pack reviews advance through 1, 3, 7, 14, and 30 day intervals', () => {
  const state = createState(term);
  const pack = completePackState(state, 'CA', 1, '2026-08-17', term, new Date('2026-08-17T10:00:00Z'));
  assert.equal(pack.next_review, '2026-08-18');
  completeReviewState(state, pack.id, '2026-08-18', term, new Date('2026-08-18T10:00:00Z'));
  assert.equal(pack.next_review, '2026-08-21');
  completeReviewState(state, pack.id, '2026-08-21', term, new Date('2026-08-21T10:00:00Z'));
  assert.equal(pack.next_review, '2026-08-28');
  completeReviewState(state, pack.id, '2026-08-28', term, new Date('2026-08-28T10:00:00Z'));
  assert.equal(pack.next_review, '2026-09-11');
  completeReviewState(state, pack.id, '2026-09-11', term, new Date('2026-09-11T10:00:00Z'));
  assert.equal(pack.next_review, '2026-10-11');
  assert.deepEqual(reviewsForDate(state, '2026-10-12').map((item) => item.id), ['CA-W1']);
});
