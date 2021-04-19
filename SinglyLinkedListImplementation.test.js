const { test, expect } = require('@jest/globals');
const singlyLinkedListImplementation = require('./SinglyLinkedListImplementation.js');
const SinglyLinkedList = singlyLinkedListImplementation.SinglyLinkedList;

test('SinglyLinkedList head and tail should be the same node containing the passed in value when instantiated', () => {
  const firstValue = 15;
  const singlyLinkedList = new SinglyLinkedList(firstValue);
  expect(singlyLinkedList.head).toEqual({ value: firstValue, next: null });
  expect(singlyLinkedList.tail).toEqual({ value: firstValue, next: null });
  expect(singlyLinkedList.head).toEqual(singlyLinkedList.tail);
});

test('SinglyLinkedList.getNodeAtIndex(index) should return the node at the passed in index', () => {
  const firstValue = 15;
  const singlyLinkedList = new SinglyLinkedList(firstValue);
  const node = singlyLinkedList.getNodeAtIndex(0);
  expect(node).toEqual({ value: firstValue, next: null });
});

test('SinglyLinkedList.getValueAtIndex(index) should return the value at the passed in index', () => {
  const firstValue = 15;
  const singlyLinkedList = new SinglyLinkedList(firstValue);
  expect(singlyLinkedList.getValueAtIndex(0)).toBe(firstValue);
});

test('SinglyLinkedList.append(value) should append a node to the end of the list', () => {
  const firstValue = 15;
  const appendValue = 20;
  const singlyLinkedList = new SinglyLinkedList(firstValue);
  singlyLinkedList.append(appendValue);
  expect(singlyLinkedList.getNodeAtIndex(1)).toEqual({ value: appendValue, next: null });
});

test('SinglyLinkedList.prepend(value) should prepend a node to the beginning of the list', () => {
  const firstValue = 15;
  const prependValue = 20;
  const singlyLinkedList = new SinglyLinkedList(firstValue);
  singlyLinkedList.prepend(prependValue);
  expect(singlyLinkedList.getNodeAtIndex(0)).toEqual({ value: prependValue, next: singlyLinkedList.getNodeAtIndex(1) });
});

test('SinglyLinkedList.getValues() should return an array of all values held by the list', () => {
  const values = [15, 20, 25];
  const singlyLinkedList = new SinglyLinkedList(values[1]);
  singlyLinkedList.prepend(values[0]);
  singlyLinkedList.append(values[2]);
  expect(singlyLinkedList.getValues()).toEqual(values);
});

test('SinglyLinkedList.insert(index) should insert a node at the passed in index when index is in range', () => {
  const values = [15, 20, 25];
  const singlyLinkedList = new SinglyLinkedList(values[0]);
  singlyLinkedList.append(values[2]);
  singlyLinkedList.insert(1, values[1]);
  expect(singlyLinkedList.getValueAtIndex(0)).toBe(values[0]);
  expect(singlyLinkedList.getValueAtIndex(1)).toBe(values[1]);
  expect(singlyLinkedList.getValueAtIndex(2)).toBe(values[2]);
});

test('SinglyLinkedList.insert(index) should append a node at the passed in index when index is out of range (> length)', () => {
  const values = [15, 20, 25];
  const singlyLinkedList = new SinglyLinkedList(values[0]);
  singlyLinkedList.append(values[1]);
  singlyLinkedList.insert(10, values[2]);
  expect(singlyLinkedList.getValueAtIndex(0)).toBe(values[0]);
  expect(singlyLinkedList.getValueAtIndex(1)).toBe(values[1]);
  expect(singlyLinkedList.getValueAtIndex(2)).toBe(values[2]);
});

test('SinglyLinkedList.insert(index) should throw an error when passed in index is less than 0', () => {
  const values = [15, 20];
  const invalidIndex = -1;
  const singlyLinkedList = new SinglyLinkedList(values[0]);
  expect(() => {
    singlyLinkedList.insert(invalidIndex, values[1]);
  }).toThrowError(`cannot insert at index less than 0 (${invalidIndex} was passed for index)`);
});

test('SinglyLinkedList.remove(index) should remove the node at the passed in index when index is in range', () => {
  const values = [15, 20, 25];
  const singlyLinkedList = new SinglyLinkedList(values[0]);
  singlyLinkedList.append(values[2]);
  singlyLinkedList.insert(1, values[1]);
  expect(singlyLinkedList.getValueAtIndex(0)).toBe(values[0]);
  expect(singlyLinkedList.getValueAtIndex(1)).toBe(values[1]);
  expect(singlyLinkedList.getValueAtIndex(2)).toBe(values[2]);
});

test('SinglyLinkedList.remove(index) should pop the tail node when the passed in index is out of range (> length)', () => {
  const values = [15, 20];
  const singlyLinkedList = new SinglyLinkedList(values[0]);
  singlyLinkedList.append(values[1]);
  singlyLinkedList.remove(10);
  expect(singlyLinkedList.getValues()).toEqual([values[0]]);
});

test('SinglyLinkedList.remove(index) should throw an error when passed in index is less than 0', () => {
  const firstValue = 15;
  const invalidIndex = -1;
  const singlyLinkedList = new SinglyLinkedList(firstValue);
  expect(() => {
    singlyLinkedList.remove(invalidIndex);
  }).toThrowError(`cannot remove element at index less than 0 (${invalidIndex} was passed for index)`);
});
