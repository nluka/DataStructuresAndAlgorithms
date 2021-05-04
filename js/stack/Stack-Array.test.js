const { test, expect, beforeEach } = require('@jest/globals');
const stackarr = require('./Stack-Array.js');
const StackArr = stackarr.StackArr;

const stack = new StackArr();

beforeEach(() => {
  clearStack();
});

function clearStack() {
  stack.top = null;
  stack.bottom = null;
  stack.length = 0;
}

test('0. StackArr.constructor() should create an empty stack with length 0', () => {
  expect(stack.values).toEqual([]);
  expect(stack.length).toBe(0);
});

test('1. StackArr.push(value) should increment length when stack is empty or has items', () => {
  const values = [10, 15, 20];

  stack.push(values[0]);
  expect(stack.length).toBe(1);

  stack.push(values[1]);
  expect(stack.length).toBe(2);

  stack.push(values[2]);
  expect(stack.length).toBe(3);
});

test('2. StackArr.push(value) should set top and bottom equal to the same value when stack is empty', () => {
  const pushValue = 10;
  stack.push(pushValue);
  expect(stack.top).toBe(pushValue);
  expect(stack.bottom).toBe(pushValue);
});

test('3. StackArr.push(value) should add an item to the top when stack has items', () => {
  const values = [10, 15, 20];

  stack.push(values[0]);
  stack.push(values[1]);
  stack.push(values[2]);

  expect(stack.top).toBe(values[2]);
  expect(stack.bottom).toBe(values[0]);
});

test('4. StackArr.pop() should do nothing when stack length is 0', () => {
  stack.pop();

  expect(stack.top).toBeNull();
  expect(stack.bottom).toBeNull();
  expect(stack.length).toBe(0);
});

test('5. StackArr.pop() should decrement length when stack has 1 item', () => {
  stack.push(10);
  stack.pop();
  expect(stack.length).toBe(0);
});

test('6. StackArr.pop() should decrement length when stack has 2 items', () => {
  stack.push(10);
  stack.push(15);
  stack.pop();
  expect(stack.length).toBe(1);
});

test('7. StackArr.pop() should decrement length when stack has more than 2 items', () => {
  stack.push(10); // length = 1
  stack.push(15); // length = 2
  stack.push(20); // length = 3
  stack.pop(); // length = 2
  expect(stack.length).toBe(2);

  stack.push(20); // length = 3
  stack.push(25); // length = 4
  stack.pop(); // length = 3
  expect(stack.length).toBe(3);
});

test('8. StackArr.pop() should set top and bottom to null when stack has 1 item', () => {
  stack.push(10);
  stack.pop();

  expect(stack.top).toBeNull();
  expect(stack.bottom).toBeNull();
  expect(stack.length).toBe(0);
});

test('9. StackArr.pop() should remove the top item when stack has 2 items', () => {
  const values = [10, 15];

  stack.push(values[0]);
  stack.push(values[1]);
  stack.pop();

  expect(stack.top).toBe(values[0]);
  expect(stack.bottom).toBe(values[0]);
});

test('10. StackArr.pop() should remove the top item when stack has more than 2 items', () => {
  const values = [10, 15, 20];

  stack.push(values[0]);
  stack.push(values[1]);
  stack.push(values[2]);
  stack.pop();

  expect(stack.top).toEqual(values[1]);
});

test('11. StackArr.getNodeAtIndex(index) should throw an error when index is less than 0', () => {
  const invalidIndex = -1;
  expect(() => {
    stack.getNodeAtIndex(invalidIndex);
  }).toThrowError(new Error(`cannot get node at index less than 0 (passed in index was ${invalidIndex})`));
});

test('12. StackArr.getNodeAtIndex(index) should should throw an error when index >= length', () => {
  stack.push(10);
  const invalidIndex = stack.length;
  expect(() => {
    stack.getNodeAtIndex(invalidIndex);
  }).toThrowError(new Error(`cannot get node at index greater than length-1 (passed in index was ${invalidIndex})`));
});

test('13. StackArr.getNodeAtIndex(index) should return the node at the passed in index when index is valid', () => {
  const values = [10, 15, 20];

  stack.push(values[0]);
  stack.push(values[1]);
  stack.push(values[2]);

  const index = 1;
  const returnedValue = stack.getNodeAtIndex(index);
  const expectedValue = values[index];

  expect(returnedValue).toBe(expectedValue);
});

test('14. StackArr.peek() should return null when stack is empty', () => {
  expect(stack.peek()).toBeNull();
});

test('15. StackArr.peek() should return top value when stack has items', () => {
  const values = [10, 15, 20];

  stack.push(values[0]);
  expect(stack.peek()).toBe(values[0]);

  stack.push(values[1]);
  expect(stack.peek()).toBe(values[1]);

  stack.push(values[2]);
  expect(stack.peek()).toBe(values[2]);
});

test('16. StackArr.isEmpty() should return true when stack has no items', () => {
  expect(stack.isEmpty()).toBe(true);
});

test('17. StackArr.isEmpty() should return false when stack has items', () => {
  stack.push(10);
  expect(stack.isEmpty()).toBe(false);

  stack.push(15);
  expect(stack.isEmpty()).toBe(false);

  stack.push(20);
  expect(stack.isEmpty()).toBe(false);
});
