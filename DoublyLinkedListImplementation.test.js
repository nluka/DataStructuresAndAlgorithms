const { test, expect } = require('@jest/globals');
const doublyLinkedListImplementation = require('./DoublyLinkedListImplementation.js');
const DoublyLinkedList = doublyLinkedListImplementation.DoublyLinkedList;

test('DoublyLinkedList head and tail should be the same node containing the passed in value when instantiated', () => {
  const firstValue = 15;
  const doublyLinkedList = new DoublyLinkedList(firstValue);
  expect(doublyLinkedList.head).toEqual({ value: firstValue, next: null, previous: null });
  expect(doublyLinkedList.tail).toEqual({ value: firstValue, next: null, previous: null });
  expect(doublyLinkedList.head).toEqual(doublyLinkedList.tail);
});

test('DoublyLinkedList.getNodeAtIndex(index) should return the node at the passed in index', () => {
  const firstValue = 15;
  const doublyLinkedList = new DoublyLinkedList(firstValue);
  const node = doublyLinkedList.getNodeAtIndex(0);
  expect(node).toEqual({ value: firstValue, next: null, previous: null });
});

test('DoublyLinkedList.getValueAtIndex(index) should return the value at the passed in index', () => {
  const firstValue = 15;
  const doublyLinkedList = new DoublyLinkedList(firstValue);
  expect(doublyLinkedList.getValueAtIndex(0)).toBe(firstValue);
});

test('DoublyLinkedList.append(value) should append a node to the end of the list', () => {
  const firstValue = 15;
  const appendValue = 20;
  const doublyLinkedList = new DoublyLinkedList(firstValue);
  doublyLinkedList.append(appendValue);
  expect(doublyLinkedList.getNodeAtIndex(1)).toEqual({ value: appendValue, next: null, previous: doublyLinkedList.head });
});

test('DoublyLinkedList.prepend(value) should prepend a node to the beginning of the list', () => {
  const firstValue = 15;
  const prependValue = 20;
  const doublyLinkedList = new DoublyLinkedList(firstValue);
  doublyLinkedList.prepend(prependValue);
  expect(doublyLinkedList.getNodeAtIndex(0)).toEqual({ value: prependValue, next: doublyLinkedList.getNodeAtIndex(1), previous: null });
});

test('DoublyLinkedList.getValues() should return an array of all values held by the list', () => {
  const values = [15, 20, 25];
  const doublyLinkedList = new DoublyLinkedList(values[1]);
  doublyLinkedList.prepend(values[0]);
  doublyLinkedList.append(values[2]);
  expect(doublyLinkedList.getValues()).toEqual(values);
});

test('DoublyLinkedList.insert(index) should insert a node at the passed in index when index is in range', () => {
  const values = [15, 20, 25];
  const doublyLinkedList = new DoublyLinkedList(values[0]);
  doublyLinkedList.append(values[2]);
  doublyLinkedList.insert(1, values[1]);
  expect(doublyLinkedList.getValueAtIndex(0)).toBe(values[0]);
  expect(doublyLinkedList.getValueAtIndex(1)).toBe(values[1]);
  expect(doublyLinkedList.getValueAtIndex(2)).toBe(values[2]);
});

test('DoublyLinkedList.insert(index) should append a node at the passed in index when index is out of range (> length)', () => {
  const values = [15, 20, 25];
  const doublyLinkedList = new DoublyLinkedList(values[0]);
  doublyLinkedList.append(values[1]);
  doublyLinkedList.insert(10, values[2]);
  expect(doublyLinkedList.getValueAtIndex(0)).toBe(values[0]);
  expect(doublyLinkedList.getValueAtIndex(1)).toBe(values[1]);
  expect(doublyLinkedList.getValueAtIndex(2)).toBe(values[2]);
});

test('DoublyLinkedList.insert(index) should throw an error when passed in index is less than 0', () => {
  const values = [15, 20];
  const invalidIndex = -1;
  const doublyLinkedList = new DoublyLinkedList(values[0]);
  expect(() => {
    doublyLinkedList.insert(invalidIndex, values[1]);
  }).toThrowError(`cannot insert at index less than 0 (${invalidIndex} was passed for index)`);
});

test('DoublyLinkedList.remove(index) should remove the node at the passed in index when index is in range', () => {
  const values = [15, 20, 25];
  const doublyLinkedList = new DoublyLinkedList(values[0]);
  doublyLinkedList.append(values[2]);
  doublyLinkedList.insert(1, values[1]);
  expect(doublyLinkedList.getValueAtIndex(0)).toBe(values[0]);
  expect(doublyLinkedList.getValueAtIndex(1)).toBe(values[1]);
  expect(doublyLinkedList.getValueAtIndex(2)).toBe(values[2]);
});

test('DoublyLinkedList.remove(index) should pop the tail node when the passed in index is out of range (> length)', () => {
  const values = [15, 20];
  const doublyLinkedList = new DoublyLinkedList(values[0]);
  doublyLinkedList.append(values[1]);
  doublyLinkedList.remove(10);
  expect(doublyLinkedList.getValues()).toEqual([values[0]]);
});

test('DoublyLinkedList.remove(index) should throw an error when passed in index is less than 0', () => {
  const firstValue = 15;
  const invalidIndex = -1;
  const doublyLinkedList = new DoublyLinkedList(firstValue);
  expect(() => {
    doublyLinkedList.remove(invalidIndex);
  }).toThrowError(`cannot remove element at index less than 0 (${invalidIndex} was passed for index)`);
});
