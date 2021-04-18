const { test, expect } = require('@jest/globals');
const { firstRecurringArrayElement } = require('./FirstRecurringArrayElement');

test('firstRecurringArrayElement should return first recurring array element', () => {
  expect(firstRecurringArrayElement([2, 5, 1, 2, 3, 5, 1, 2, 4])).toBe(2);
  expect(firstRecurringArrayElement([2, 1, 1, 2, 3, 5, 1, 2, 4])).toBe(1);
  expect(firstRecurringArrayElement([2, 5, 5, 2, 3, 5, 1, 2, 4])).toBe(5);
  expect(firstRecurringArrayElement(['one', 'two', 'one'])).toBe('one');
  expect(firstRecurringArrayElement([null, 1, null])).toBe(null);
  expect(firstRecurringArrayElement([undefined, 1, undefined])).toBe(undefined);
});

test('firstRecurringArrayElement should return undefined when passed empty array or not an array', () => {
  expect(firstRecurringArrayElement([])).toBe(undefined);
  expect(firstRecurringArrayElement({})).toBe(undefined);
  expect(firstRecurringArrayElement(1)).toBe(undefined);
  expect(firstRecurringArrayElement('one')).toBe(undefined);
  expect(firstRecurringArrayElement(undefined)).toBe(undefined);
  expect(firstRecurringArrayElement(null)).toBe(undefined);
  expect(firstRecurringArrayElement([{ 1: 'one' }, { 2: 'two' }, { 1: 'one' }])).toBe(undefined);
});

test('firstRecurringArrayElement should return undefined if all elements are unique', () => {
  expect(firstRecurringArrayElement([2])).toBe(undefined);
  expect(firstRecurringArrayElement(['two'])).toBe(undefined);
});

test('firstRecurringArrayElement should not mutate passed in array', () => {
  const originalArray = [1, 2, 3];
  firstRecurringArrayElement(originalArray);
  expect(originalArray).toEqual([1, 2, 3]);
});
