import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { blockId, sha256Hex } from '../web-app/js/hash.js';
import { dayStack } from '../web-app/js/derive.js';

const term = JSON.parse(readFileSync(new URL('../terms/2026-fall/term.json', import.meta.url)));

test('SHA-256 and block IDs match Python hashlib', () => {
  assert.equal(sha256Hex('abc'), 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
  assert.equal(blockId('review', 'CA'), '48924c32d2f1');
  assert.equal(blockId('power_nap', '-'), 'c4c653ac5d17');
});

test('normal Monday materializes the canonical eight-block stack', () => {
  const plan = dayStack(1, 'Mon', term);
  assert.equal(plan.kind, 'stack');
  assert.deepEqual(plan.courses, ['CA', 'PS']);
  assert.equal(plan.blocks.length, 8);
  assert.deepEqual(plan.blocks.map((block) => block.prio), ['P0', 'P0', 'P0', 'P1', 'P1', 'P2', 'P2', 'P2']);
  assert.deepEqual(plan.blocks.map((block) => block.course), ['CA', 'CA', 'CA', 'PS', 'rev', '-', 'CA', '-']);
});

test('variant weeks and Saturday override match the term contract', () => {
  assert.deepEqual(dayStack(8, 'Mon', term).blocks.map((block) => block.label),
    ['past_paper_run', 'blank_page', 'error_log_review']);
  assert.equal(dayStack(9, 'Mon', term).blocks.length, 4);
  assert.deepEqual(dayStack(1, 'Sat', term).blocks.map((block) => block.course), ['AI', 'CCN', 'SE']);
  assert.equal(dayStack(8, 'Sat', term).kind, 'off');
  assert.equal(dayStack(1, 'Sun', term).kind, 'ledger_catchup');
});
