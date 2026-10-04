import assert from 'node:assert/strict';
import test from 'node:test';
import { matchesBudget } from '../src/utils/budget.js';

test('converts thousand, lakh and crore prices into comparable budgets', () => {
  assert.equal(matchesBudget('17 K', 'below-25'), true);
  assert.equal(matchesBudget('4.999 K', 'below-25'), true);
  assert.equal(matchesBudget('20000 K', 'above-100'), true);
  assert.equal(matchesBudget('38 Lac', '25-50'), true);
  assert.equal(matchesBudget('56.25 Lac', '50-100'), true);
  assert.equal(matchesBudget('1.50 Cr', 'above-100'), true);
  assert.equal(matchesBudget('52 Lac', '25-50'), false);
});

test('handles exact budget boundaries without overlapping single prices', () => {
  for (const [price, expected] of [
    ['25 Lac', '25-50'],
    ['50 Lac', '50-100'],
    ['1 Cr', '50-100'],
    ['1.01 Cr', 'above-100'],
  ]) {
    for (const budget of ['below-25', '25-50', '50-100', 'above-100']) {
      assert.equal(matchesBudget(price, budget), budget === expected, `${price}: ${budget}`);
    }
  }
});

test('matches price ranges that overlap the selected budget', () => {
  assert.equal(matchesBudget('51.31 Lac - 78.10 Lac', '50-100'), true);
  assert.equal(matchesBudget('51.31 Lac - 78.10 Lac', '25-50'), false);
  assert.equal(matchesBudget('1.435 Cr - 4.676 Cr', 'above-100'), true);
  assert.equal(matchesBudget('75 Lac - 1.25 Cr', '50-100'), true);
  assert.equal(matchesBudget('75 Lac - 1.25 Cr', 'above-100'), true);
  assert.equal(matchesBudget('20 - 30 Lac', 'below-25'), true);
  assert.equal(matchesBudget('20 - 30 Lac', '25-50'), true);
});

test('excludes unknown and per-area prices only when a budget is selected', () => {
  for (const price of ['', 'Price on Request', '26,999/- per Squire Yard', '100 Cr - 1 Cr', undefined]) {
    assert.equal(matchesBudget(price, ''), true);
    assert.equal(matchesBudget(price, 'below-25'), false);
    assert.equal(matchesBudget(price, 'above-100'), false);
  }
});

test('accepts commas, rupee prefixes, unit variants and range dashes', () => {
  assert.equal(matchesBudget('\u20b9 25,00,000', '25-50'), true);
  assert.equal(matchesBudget('50 lakh', '50-100'), true);
  assert.equal(matchesBudget('2 crore', 'above-100'), true);
  assert.equal(matchesBudget('30 Lac \u2013 60 Lac', '25-50'), true);
});
