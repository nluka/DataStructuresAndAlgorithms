const { test, expect } = require('@jest/globals');
const { firstRecurringArrayElement } = require('./FirstRecurringArrayElement');

test('0. firstRecurringArrayElement should return undefined when null is passed in', () => {
  expect(firstRecurringArrayElement(null)).toBe(undefined);
});

test('1. firstRecurringArrayElement should return undefined when undefined is passed in', () => {
  expect(firstRecurringArrayElement(undefined)).toBe(undefined);
});

test('2. firstRecurringArrayElement should return undefined when empty array is passed in', () => {
  expect(firstRecurringArrayElement([])).toBe(undefined);
});

test('3. firstRecurringArrayElement should return undefined when empty object is passed in', () => {
  expect(firstRecurringArrayElement({})).toBe(undefined);
});

test('4. firstRecurringArrayElement should return undefined when number is passed in', () => {
  expect(firstRecurringArrayElement(1)).toBe(undefined);
});

test('5. firstRecurringArrayElement should return undefined when string is passed in', () => {
  expect(firstRecurringArrayElement('one')).toBe(undefined);
});

test('6. firstRecurringArrayElement should return undefined when array containing duplicate (by value) objects is passed in', () => {
  expect(firstRecurringArrayElement([{ 1: 'one' }, { 2: 'two' }, { 1: 'one' }])).toBe(undefined);
});

test('7. firstRecurringArrayElement should return first recurring object when array containing duplicate (by reference) objects is passed in', () => {
  const objOne = { 1: 'one' };
  const objTwo = { 2: 'two' };
  const objThree = { 3: 'three' };
  expect(firstRecurringArrayElement([objOne, objTwo, objOne, objThree])).toBe(objOne);
});

test('8. firstRecurringArrayElement should return first recurring element when array of elements containing duplicates is passed in', () => {
  expect(firstRecurringArrayElement([1, 1, 1])).toBe(1);
  expect(firstRecurringArrayElement([2, 5, 1, 2, 3, 5, 1, 2, 4])).toBe(2);
  expect(firstRecurringArrayElement([2, 1, 1, 2, 3, 5, 1, 2, 4])).toBe(1);
  expect(firstRecurringArrayElement([2, 5.5, 5.5, 2, 3, 5, 1, 2, 4])).toBeCloseTo(5.5);
  expect(firstRecurringArrayElement(['one', 'two', 'one', 3])).toBe('one');
  expect(firstRecurringArrayElement([null, 1, null])).toBe(null);
  expect(firstRecurringArrayElement([undefined, 1, undefined])).toBe(undefined);
});

test('9. firstRecurringArrayElement should return undefined if all array elements are unique', () => {
  expect(firstRecurringArrayElement([1])).toBe(undefined);
  expect(firstRecurringArrayElement([2, 3, 4])).toBe(undefined);
  expect(firstRecurringArrayElement(['two', 'three', 'four'])).toBe(undefined);
});

test('10. firstRecurringArrayElement should not mutate passed in array', () => {
  const originalArray = [1, 2, 3];
  firstRecurringArrayElement(originalArray);
  expect(originalArray).toEqual([1, 2, 3]);
});
