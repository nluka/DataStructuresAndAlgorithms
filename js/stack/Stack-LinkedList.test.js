const { test, expect, beforeEach } = require('@jest/globals');
const stackll = require('./Stack-LinkedList.js');
const StackLL = stackll.StackLL;

const stack = new StackLL();

beforeEach(clearStack);

function clearStack() {
  stack.top = null;
  stack.bottom = null;
  stack.length = 0;
}

test('0. StackLL.constructor() should create an empty stack with length 0', () => {
  expect(stack.top).toBeNull();
  expect(stack.bottom).toBeNull();
  expect(stack.length).toBe(0);
});

test('1. StackLL.push(value) should increment length when stack is empty or has items', () => {
  const values = [10, 15, 20];

  stack.push(values[0]);
  expect(stack.length).toEqual(1);

  stack.push(values[1]);
  expect(stack.length).toEqual(2);

  stack.push(values[2]);
  expect(stack.length).toEqual(3);
});

test('2. StackLL.push(value) should set top and bottom equal to the same new node when stack is empty', () => {
  const pushValue = 10;
  stack.push(pushValue);
  const expectedTopAndBottom = { value: pushValue, next: null };
  expect(stack.top).toEqual(expectedTopAndBottom);
  expect(stack.bottom).toEqual(expectedTopAndBottom);
});

test('3. StackLL.push(value) should add an item to the top when stack has items', () => {
  const values = [10, 15, 20];

  stack.push(values[0]);
  stack.push(values[1]);
  stack.push(values[2]);

  const expectedTop = { value: values[2], next: null };
  const expectedMiddle = { value: values[1], next: expectedTop };
  const expectedBottom = { value: values[0], next: expectedMiddle };

  expect(stack.top).toEqual(expectedTop);
  expect(stack.bottom).toEqual(expectedBottom);
});

test('4. StackLL.pop() should do nothing when stack length is 0', () => {
  stack.pop();

  expect(stack.top).toBeNull();
  expect(stack.bottom).toBeNull();
  expect(stack.length).toBe(0);
});

test('5. StackLL.pop() should decrement length when stack has 1 item', () => {
  stack.push(10);
  stack.pop();
  expect(stack.length).toBe(0);
});

test('6. StackLL.pop() should decrement length when stack has 2 items', () => {
  stack.push(10);
  stack.push(15);
  stack.pop();
  expect(stack.length).toBe(1);
});

test('7. StackLL.pop() should decrement length when stack has more than 2 items', () => {
  stack.push(10);
  stack.push(15);
  stack.push(20);
  stack.pop();
  expect(stack.length).toBe(2);

  stack.push(20);
  stack.push(25);
  stack.pop();
  expect(stack.length).toBe(3);
});

test('8. StackLL.pop() should set top and bottom to null when stack has 1 item', () => {
  stack.push(10);
  stack.pop();

  expect(stack.top).toBeNull();
  expect(stack.bottom).toBeNull();
  expect(stack.length).toBe(0);
});

test('9. StackLL.pop() should remove the top item when stack has 2 items', () => {
  const values = [10, 15];

  stack.push(values[0]);
  stack.push(values[1]);
  stack.pop();

  const expectedTop = { value: values[0], next: null };

  expect(stack.top).toEqual(expectedTop);
});

test('10. StackLL.pop() should remove the top item when stack has more than 2 items', () => {
  const values = [10, 15, 20];

  stack.push(values[0]);
  stack.push(values[1]);
  stack.push(values[2]);
  stack.pop();

  const expectedTop = { value: values[1], next: null };
  const expectedBottom = { value: values[0], next: expectedTop };

  expect(stack.top).toEqual(expectedTop);
  expect(stack.bottom).toEqual(expectedBottom);
});

test('11. StackLL.getNodeAtIndex(index) should throw an error when index is less than 0', () => {
  const invalidIndex = -1;
  expect(() => {
    stack.getNodeAtIndex(invalidIndex);
  }).toThrowError(new Error(`cannot get node at index less than 0 (passed in index was ${invalidIndex})`));
});

test('12. StackLL.getNodeAtIndex(index) should should throw an error when index >= length', () => {
  stack.push(10);
  const invalidIndex = stack.length;
  expect(() => {
    stack.getNodeAtIndex(invalidIndex);
  }).toThrowError(new Error(`cannot get node at index greater than length-1 (passed in index was ${invalidIndex})`));
});

test('13. StackLL.getNodeAtIndex(index) should return the node at the passed in index when index is valid', () => {
  const values = [10, 15, 20];

  stack.push(values[0]);
  stack.push(values[1]);
  stack.push(values[2]);

  const index = 1;
  const returnedNode = stack.getNodeAtIndex(index);
  const expectedNode = { value: values[index], next: stack.top };

  expect(returnedNode).toEqual(expectedNode);
});

test('14. StackLL.peek() should return null when stack is empty', () => {
  expect(stack.peek()).toBeNull();
});

test('15. StackLL.peek() should return top value when stack has items', () => {
  const values = [10, 15, 20];

  stack.push(values[0]);
  expect(stack.peek()).toBe(values[0]);

  stack.push(values[1]);
  expect(stack.peek()).toBe(values[1]);

  stack.push(values[2]);
  expect(stack.peek()).toBe(values[2]);
});

test('16. StackLL.isEmpty() should return true when stack has no items', () => {
  expect(stack.isEmpty()).toBe(true);
});

test('17. StackLL.isEmpty() should return false when stack has items', () => {
  stack.push(10);
  expect(stack.isEmpty()).toBe(false);

  stack.push(15);
  expect(stack.isEmpty()).toBe(false);

  stack.push(20);
  expect(stack.isEmpty()).toBe(false);
});
