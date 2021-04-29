const { test, expect } = require('@jest/globals');
const stackll = require('./Stack-LinkedList.js');
const StackLL = stackll.StackLL;

test('0. StackLL.constructor() should create an empty stack with length 0', () => {
  const stack = new StackLL();
  expect(stack.top).toBeNull();
  expect(stack.bottom).toBeNull();
  expect(stack.length).toBe(0);
});

test('1. When stack is empty, StackLL.push(value) should set top and bottom equal to the same new node and increment length', () => {
  const stack = new StackLL();
  const pushValue = 10;
  stack.push(pushValue);
  const expectedTopAndBottom = { value: pushValue, next: null };
  expect(stack.top).toEqual(expectedTopAndBottom);
  expect(stack.bottom).toEqual(expectedTopAndBottom);
  expect(stack.length).toEqual(1);
});

test('1. When stack has items, StackLL.push(value) should set add an item to the top of the stack and increment length', () => {
  const stack = new StackLL();
  const values = [10, 15, 20];
  stack.push(values[0]);
  stack.push(values[1]);
  stack.push(values[2]);
  const expectedTop = { value: values[2], next: null };
  const expectedMiddle = { value: values[1], next: expectedTop };
  const expectedBottom = { value: values[0], next: expectedMiddle };
  expect(stack.top).toEqual(expectedTop);
  expect(stack.bottom).toEqual(expectedBottom);
  expect(stack.length).toEqual(3);
});
