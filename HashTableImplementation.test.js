const { test, expect } = require('@jest/globals');
const hashTableImplementation = require('./HashTableImplementation.js');
const util = require('./util.js');
const HashTable = hashTableImplementation.HashTable;
const getRandomAlphabeticalString = util.getRandomAlphabeticalString;

test('1. HashTable.data.length should be the same length as the size passed into constructor', () => {
  for (let i = 0; i < 5; i++) {
    const SIZE = i * 10;
    const hashTable = new HashTable(SIZE);
    expect(hashTable.data.length).toBe(SIZE);
  }
});

test('2. HashTable.data elements should be undefined when instantiated', () => {
  const SIZE = 10;
  const hashTable = new HashTable(SIZE);
  for (let i = 0; i < SIZE; i++) {
    expect(hashTable.data[i]).toBe(undefined);
  }
});

test('3. HashTable._hash should return number from zero to (size-1)', () => {
  const SIZE = 10;
  const hashTable = new HashTable(SIZE);
  const NUMBER_OF_RUNS = 1_000;
  for (let i = 0; i < NUMBER_OF_RUNS; i++) {
    const hash = hashTable._hash(getRandomAlphabeticalString(100));
    expect(typeof hash === 'number');
    expect(hash).toBeGreaterThanOrEqual(0);
    expect(hash).toBeLessThanOrEqual(SIZE - 1);
  }
});

test('4. HashTable.set(key, value) should append [key, value] to data[hash]', () => {
  const SIZE = 10;
  const hashTable = new HashTable(SIZE);
  hashTable.set('apples', 15);
  const address = hashTable._hash('apples');
  expect(hashTable.data[address]).toEqual([['apples', 15]]);
});

test('5. HashTable.get(key) should return the set value', () => {
  const SIZE = 10;
  const hashTable = new HashTable(SIZE);
  const KEY = 'apples';
  const VALUE = 15;
  hashTable.set(KEY, VALUE);
  expect(hashTable.get(KEY)).toBe(VALUE);
});
