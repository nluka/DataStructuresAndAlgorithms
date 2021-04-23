const { test, expect } = require('@jest/globals');
const singlyLinkedListImplementation = require('./SinglyLinkedListImplementation.js');
const SinglyLinkedList = singlyLinkedListImplementation.SinglyLinkedList;

test('0. SinglyLinkedList constructor should throw error when non-array parameter is passed in', () => {
  const values = 15;
  expect(() => {
    new SinglyLinkedList(values);
  }).toThrowError(`passed in parameter (values) must be an array, but instead is of type '${typeof values}'`);
});

test('1. SinglyLinkedList head and tail should be the same node containing the passed in value when instantiated', () => {
  const values = [15];
  const singlyLinkedList = new SinglyLinkedList(values);
  expect(singlyLinkedList.head).toEqual({ value: values[0], next: null });
  expect(singlyLinkedList.head).toBe(singlyLinkedList.tail);
});

test('2. SinglyLinkedList head and tail should be the same node containing the passed in value when instantiated', () => {
  const values = [15];
  const singlyLinkedList = new SinglyLinkedList(values);
  expect(singlyLinkedList.head).toEqual({ value: values[0], next: null });
  expect(singlyLinkedList.head).toBe(singlyLinkedList.tail);
});

test('3. SinglyLinkedList.getNodeAtIndex(index) should return the node at the passed in index', () => {
  const values = [15, 20];
  const singlyLinkedList = new SinglyLinkedList(values);
  expect(singlyLinkedList.getNodeAtIndex(0)).toEqual({ value: values[0], next: singlyLinkedList.getNodeAtIndex(1) });
  expect(singlyLinkedList.getNodeAtIndex(1)).toEqual({ value: values[1], next: null });
});

test('4. SinglyLinkedList.getValueAtIndex(index) should return the value at the passed in index', () => {
  const values = [15];
  const singlyLinkedList = new SinglyLinkedList(values);
  expect(singlyLinkedList.getValueAtIndex(0)).toBe(values[0]);
});

test('5. SinglyLinkedList.append(value) should insert a node to the end of the list', () => {
  const values = [15, 20];
  const appendValue = 25;
  const singlyLinkedList = new SinglyLinkedList(values);
  singlyLinkedList.append(appendValue);
  expect(singlyLinkedList.getNodeAtIndex(2)).toEqual({ value: appendValue, next: null });
});

test('6. SinglyLinkedList.prepend(value) should insert a node at the beginning of the list', () => {
  const values = [15, 20];
  const prependValue = 10;
  const singlyLinkedList = new SinglyLinkedList(values);
  singlyLinkedList.prepend(prependValue);
  expect(singlyLinkedList.getNodeAtIndex(0)).toEqual({ value: prependValue, next: singlyLinkedList.getNodeAtIndex(1) });
});

test('7. SinglyLinkedList.getValues() should return an array of all values held by the list', () => {
  const values = [15, 20, 25];
  const singlyLinkedList = new SinglyLinkedList(values);
  expect(singlyLinkedList.getValues()).toEqual(values);
});

test('8. SinglyLinkedList.insert(index) should insert a node at the passed in index when index is in range', () => {
  const values = [15, 20, 25];
  const singlyLinkedList = new SinglyLinkedList(values);
  const insertValue = 17.5;
  singlyLinkedList.insert(1, insertValue);
  expect(singlyLinkedList.getValues()).toEqual([15, insertValue, 20, 25]);
  expect(singlyLinkedList.getValueAtIndex(1)).toBe(insertValue);
});

test('9. SinglyLinkedList.insert(index) should append a node when index is > length)', () => {
  const values = [15, 20, 25];
  const singlyLinkedList = new SinglyLinkedList(values);
  const insertValue = 100;
  singlyLinkedList.insert(10, insertValue);
  expect(singlyLinkedList.getValues()).toEqual([15, 20, 25, insertValue]);
  expect(singlyLinkedList.getValueAtIndex(3)).toEqual(insertValue);
});

test('10. SinglyLinkedList.insert(index) should throw an error when passed in index is less than 0', () => {
  const values = [15, 20];
  const invalidIndex = -1;
  const singlyLinkedList = new SinglyLinkedList(values);
  expect(() => {
    singlyLinkedList.insert(invalidIndex, 25);
  }).toThrowError(`cannot insert at index less than 0 (${invalidIndex} was passed for index)`);
});

test('11. SinglyLinkedList.remove(index) should remove the node at the passed in index when index is in range', () => {
  const values = [15, 20, 25];
  const singlyLinkedList = new SinglyLinkedList(values);
  singlyLinkedList.remove(1);
  expect(singlyLinkedList.getValues()).toEqual([15, 25]);
  expect(singlyLinkedList.getValueAtIndex(0)).toBe(values[0]);
  expect(singlyLinkedList.getValueAtIndex(1)).toBe(values[2]);
});

test('12. SinglyLinkedList.remove(index) should pop the tail node when the passed in index is > length', () => {
  const values = [15, 20];
  const singlyLinkedList = new SinglyLinkedList(values);
  singlyLinkedList.remove(10);
  expect(singlyLinkedList.getValues()).toEqual([15]);
});

test('13. SinglyLinkedList.remove(index) should throw an error when passed in index is < 0', () => {
  const values = [15, 20];
  const invalidIndex = -1;
  const singlyLinkedList = new SinglyLinkedList(values);
  expect(() => {
    singlyLinkedList.remove(invalidIndex);
  }).toThrowError(`cannot remove element at index less than 0 (${invalidIndex} was passed for index`);
});

test('14. SinglyLinkedList.reverse() should return reverse the linked list and return itself', () => {
  const values = [5, 10, 15];
  const valuesReversed = [15, 10, 5];
  const singlyLinkedList = new SinglyLinkedList(values);
  const singlyLinkedListReversed = new SinglyLinkedList(valuesReversed);
  expect(singlyLinkedList.reverse()).toEqual(singlyLinkedListReversed);
});
