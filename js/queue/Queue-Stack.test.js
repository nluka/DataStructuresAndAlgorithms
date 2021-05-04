const { test, expect, afterEach } = require('@jest/globals');
const QueueStackjs = require('./Queue-Stack.js');
const QueueStack = QueueStackjs.QueueStack;

const queue = new QueueStack();

afterEach(clearQueue);

function clearQueue() {
  queue.first = null;
  queue.last = null;
  queue.length = 0;
}

test('0. QueueStack.constructor() should create an empty queue with first, last, and length properties', () => {
  expect(queue.first).toBeNull();
  expect(queue.last).toBeNull();
  expect(queue.length).toBe(0);
});

test('1. QueueStack.enqueue(value) should set `first` and `last` to the same node containing `value` when the queue is empty', () => {
  const value = 10;

  queue.enqueue(value);

  const expectedFirstNode = { value: value, next: null };
  const expectedLastNode = { value: value, next: null };

  expect(queue.first).toEqual(expectedFirstNode);
  expect(queue.last).toEqual(expectedLastNode);
});

test('2. QueueStack.enqueue(value) should add a node containing `value` to the end of the queue when the queue is not empty', () => {
  const values = [10, 15, 20];

  queue.enqueue(values[0]);
  queue.enqueue(values[1]);

  let expectedLastNode = { value: values[1], next: null };
  let expectedFirstNode = { value: values[0], next: expectedLastNode };

  expect(queue.first).toEqual(expectedFirstNode);
  expect(queue.last).toEqual(expectedLastNode);

  queue.enqueue(values[2]);

  expectedLastNode = { value: values[2], next: null };
  let expectedMiddleNode = { value: values[1], next: expectedLastNode };
  expectedFirstNode = { value: values[0], next: expectedMiddleNode };

  expect(queue.first).toEqual(expectedFirstNode);
  expect(queue.last).toEqual(expectedLastNode);
});

test('3. QueueStack.enqueue(value) should increment `length`', () => {
  const values = [10, 15, 20];

  queue.enqueue(values[0]);
  expect(queue).toHaveLength(1);

  queue.enqueue(values[1]);
  expect(queue).toHaveLength(2);

  queue.enqueue(values[2]);
  expect(queue).toHaveLength(3);
});

test('4. QueueStack.dequeue() should clear the queue when there is 1 item in queue', () => {
  queue.enqueue(10);
  queue.dequeue();
  expect(queue).toHaveLength(0);
  expect(queue.first).toBeNull();
  expect(queue.last).toBeNull();
});

test('5. QueueStack.dequeue() should set `first` equal to `last` when there are 2 items in queue', () => {
  const values = [10, 15];

  queue.enqueue(values[0]);
  queue.enqueue(values[1]);
  queue.dequeue();

  const expectedFirstNode = { value: values[1], next: null };
  const expectedLastNode = expectedFirstNode;

  expect(queue.first).toEqual(expectedFirstNode);
  expect(queue.last).toEqual(expectedLastNode);
});

test('6. QueueStack.dequeue() should set `first` to the second node when there are more than 2 items in queue', () => {
  const values = [10, 15, 20];

  queue.enqueue(values[0]);
  queue.enqueue(values[1]);
  queue.enqueue(values[2]);
  queue.dequeue();

  const expectedSecondNode = { value: values[2], next: null };
  const expectedFirstNode = { value: values[1], next: expectedSecondNode };

  expect(queue.first).toEqual(expectedFirstNode);
});

test('7. QueueStack.dequeue() should not change `length` when queue is empty', () => {
  queue.dequeue();
  expect(queue).toHaveLength(0);
});

test('8. QueueStack.dequeue() should decrement `length` when there is at least 1 item in queue', () => {
  queue.enqueue(10); // +1
  queue.dequeue(); // -1
  expect(queue).toHaveLength(0);

  queue.enqueue(10); // +1
  queue.enqueue(15); // +1
  queue.dequeue(); // -1
  expect(queue).toHaveLength(1);

  queue.enqueue(10); // +1
  queue.enqueue(15); // +1
  queue.enqueue(20); // +1
  queue.dequeue(); // -1
  expect(queue).toHaveLength(3);
});

test('9. QueueStack.isEmpty() should return true when queue is empty', () => {
  expect(queue.isEmpty()).toBe(true);

  queue.enqueue(10); // +1
  expect(queue.isEmpty()).toBe(false); // length = 1

  queue.enqueue(15); // +1
  expect(queue.isEmpty()).toBe(false); // length = 2

  queue.dequeue(); // -1
  expect(queue.isEmpty()).toBe(false); // length = 1

  queue.dequeue(); // -1
  expect(queue.isEmpty()).toBe(true); // length = 0
});

test('10. QueueStack.isEmpty() should return false when queue is not empty', () => {
  queue.enqueue(10); // +1
  expect(queue.isEmpty()).toBe(false); // length = 1

  queue.enqueue(15); // +1
  expect(queue.isEmpty()).toBe(false); // length = 2

  queue.dequeue(); // -1
  expect(queue.isEmpty()).toBe(false); // length = 1

  queue.enqueue(20); // +1
  expect(queue.isEmpty()).toBe(false); // length = 2

  queue.enqueue(25); // +1
  expect(queue.isEmpty()).toBe(false); // length = 3
});

test('11. QueueStack.peek() should return null when queue is empty', () => {
  expect(queue.peek()).toBeNull();
});

test('12. QueueStack.peek() should return `first` when queue is not empty', () => {
  const values = [10, 15, 20];

  queue.enqueue(values[0]);
  expect(queue.peek()).toBe(values[0]);

  queue.enqueue(values[1]);
  expect(queue.peek()).toBe(values[0]);

  queue.enqueue(values[2]);
  expect(queue.peek()).toBe(values[0]);

  queue.dequeue();
  expect(queue.peek()).toBe(values[1]);
});
