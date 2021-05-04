const { test, expect } = require('@jest/globals');
const doublyLinkedList = require('./DoublyLinkedList.js');
const DoublyLinkedList = doublyLinkedList.DoublyLinkedList;

test('0. DoublyLinkedList constructor should throw error when non-array parameter is passed in', () => {
  const values = 15;
  expect(() => {
    new DoublyLinkedList(values);
  }).toThrowError(`passed in parameter (values) must be an array, but instead is of type '${typeof values}'`);
});

test('1. DoublyLinkedList head and tail should be the same node containing the passed in value when instantiated', () => {
  const values = [15];
  const doublyLinkedList = new DoublyLinkedList(values);
  expect(doublyLinkedList.head).toEqual({ value: values[0], next: null, previous: null });
  expect(doublyLinkedList.head).toBe(doublyLinkedList.tail);
});

test('2. DoublyLinkedList.getNodeAtIndex(index) should return the node at the passed in index', () => {
  const values = [15, 20];
  const doublyLinkedList = new DoublyLinkedList(values);
  expect(doublyLinkedList.getNodeAtIndex(0)).toEqual({
    value: values[0],
    next: doublyLinkedList.getNodeAtIndex(1),
    previous: null
  });
  expect(doublyLinkedList.getNodeAtIndex(1)).toEqual({
    value: values[1],
    next: null,
    previous: doublyLinkedList.getNodeAtIndex(0)
  });
});

test('4. DoublyLinkedList.getValueAtIndex(index) should return the value at the passed in index', () => {
  const values = [15];
  const doublyLinkedList = new DoublyLinkedList(values);
  expect(doublyLinkedList.getValueAtIndex(0)).toBe(values[0]);
});

test('5. DoublyLinkedList.append(value) should insert a node at the end of the list', () => {
  const values = [15, 20];
  const appendValue = 25;
  const doublyLinkedList = new DoublyLinkedList(values);
  doublyLinkedList.append(appendValue);
  expect(doublyLinkedList.getNodeAtIndex(2)).toEqual({
    value: appendValue,
    next: null,
    previous: doublyLinkedList.getNodeAtIndex(1)
  });
});

test('6. DoublyLinkedList.prepend(value) should insert a node at the beginning of the list', () => {
  const values = [15, 20];
  const prependValue = 10;
  const doublyLinkedList = new DoublyLinkedList(values);
  doublyLinkedList.prepend(prependValue);
  expect(doublyLinkedList.getNodeAtIndex(0)).toEqual({
    value: prependValue,
    next: doublyLinkedList.getNodeAtIndex(1),
    previous: null
  });
});

test('7. DoublyLinkedList.getValues() should return an array of all values held by the list', () => {
  const values = [15, 20, 25];
  const doublyLinkedList = new DoublyLinkedList(values);
  expect(doublyLinkedList.getValues()).toEqual(values);
});

test('8. DoublyLinkedList.insert(index) should insert a node at the passed in index when index is in range', () => {
  const values = [15, 20, 25];
  const doublyLinkedList = new DoublyLinkedList(values);
  const insertValue = 17.5;
  doublyLinkedList.insert(1, insertValue);
  expect(doublyLinkedList.getValues()).toEqual([15, insertValue, 20, 25]);
  expect(doublyLinkedList.getValueAtIndex(1)).toBe(insertValue);
});

test('9. DoublyLinkedList.insert(index) should append a node when index is > length)', () => {
  const values = [15, 20, 25];
  const doublyLinkedList = new DoublyLinkedList(values);
  const insertValue = 100;
  doublyLinkedList.insert(10, insertValue);
  expect(doublyLinkedList.getValues()).toEqual([15, 20, 25, insertValue]);
  expect(doublyLinkedList.getValueAtIndex(3)).toEqual(insertValue);
});

test('10. DoublyLinkedList.insert(index) should throw an error when passed in index is less than 0', () => {
  const values = [15, 20];
  const invalidIndex = -1;
  const doublyLinkedList = new DoublyLinkedList(values);
  expect(() => {
    doublyLinkedList.insert(invalidIndex, 25);
  }).toThrowError(`cannot insert at index less than 0 (${invalidIndex} was passed for index)`);
});

test('11. DoublyLinkedList.remove(index) should remove the node at the passed in index when index is in range', () => {
  const values = [15, 20, 25];
  const doublyLinkedList = new DoublyLinkedList(values);
  doublyLinkedList.remove(1);
  expect(doublyLinkedList.getValues()).toEqual([15, 25]);
  expect(doublyLinkedList.getValueAtIndex(0)).toBe(values[0]);
  expect(doublyLinkedList.getValueAtIndex(1)).toBe(values[2]);
});

test('12. DoublyLinkedList.remove(index) should pop the tail node when the passed in index is > length', () => {
  const values = [15, 20];
  const doublyLinkedList = new DoublyLinkedList(values);
  doublyLinkedList.remove(10);
  expect(doublyLinkedList.getValues()).toEqual([15]);
});

test('13. DoublyLinkedList.remove(index) should throw an error when passed in index is < 0', () => {
  const values = [15, 20];
  const invalidIndex = -1;
  const doublyLinkedList = new DoublyLinkedList(values);
  expect(() => {
    doublyLinkedList.remove(invalidIndex);
  }).toThrowError(`cannot remove element at index less than 0 (${invalidIndex} was passed for index`);
});

test('14. DoublyLinkedList.reverse() should return reverse the linked list and return itself', () => {
  const values = [5, 10, 15];
  const valuesReversed = [15, 10, 5];
  const doublyLinkedList = new DoublyLinkedList(values);
  const doublyLinkedListReversed = new DoublyLinkedList(valuesReversed);
  expect(doublyLinkedList.reverse()).toEqual(doublyLinkedListReversed);
});
