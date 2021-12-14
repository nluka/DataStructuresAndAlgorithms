# data-structs-n-algos

Lightweight NPM package with JavaScript and TypeScript implementations for common data structures and algorithms.

## Table of Contents

- [Installation](#installation)
- [Documentation](#features)
  - [Data Structures](#data-structures)
    - [SinglyLinkedList](#singlylinkedlist)
    - [Queue](#queue)
    - [Stack](#stack)
  - [Algorithms](#algorithms)
    - [arrayFirstRepeatingElement](#arrayFirstRepeatingElement)

## Installation

`npm i data-structs-n-algos`

## Features

### Data Structures

#### Singly Linked List

```ts
export declare class NodeUnilateral<T> {
  value: T;
  next: NodeUnilateral<T> | null;
  constructor(value: T, next: NodeUnilateral<T> | null);
}
export default class SinglyLinkedList<T> {
  private _headNode;
  private _tailNode;
  private _length;
  /**
   * Creates a new instance of a singly-linked list.
   * @param values The inital values to populate list with. If omitted, list begins empty.
   */
  constructor(values?: T[]);
  /**
   * Inserts value at end of list. Time complexity = O(1).
   * @param value The value to append.
   * @returns The list instance - this.
   */
  append(value: T): this;
  /**
   * Inserts value at beginning of list. Time complexity = O(1).
   * @param value The value to prepend.
   * @returns The list instance - this.
   */
  prepend(value: T): this;
  /**
   * Inserts item at specified index. Time complexity = O(n) where n is number of items in list.
   * @param value The item to insert.
   * @param index The index at which to insert item.
   * @returns The list instance - this.
   */
  insert(value: T, index: number): this;
  /**
   * Removes an item at specified index. Throws error is list is empty. Time complexity = O(n) where n is number of items in list.
   * @param index The index of item to remove.
   * @returns The removed item.
   */
  remove(index: number): T | null;
  /**
   * Gets item at specified index. Time complexity = O(n) where n is number of items in list.
   * @param index The index of item to retrieve.
   * @returns The item at specified index.
   */
  get(index: number): T | null;
  _getNode(index: number): NodeUnilateral<T> | null;
  /**
   * @returns An array containing currently held items, ordered from head to tail. Time complexity = O(n) where n is number of items in list.
   */
  getItems(): T[];
  /**
   * Executes a callback function for each item in list. Time complexity = O(n) where n is number of items in list.
   * @param callback The function to execute for each item in list.
   * @returns The list instance - this.
   */
  forEach(callback: (item: T, index: number) => void): this;
  /**
   * Executes a callback function that replaces each item in list with result. Time complexity = O(n) where n is number of items in list.
   * @param callback The function to execute for each item in list.
   * @returns The list instance - this.
   */
  forEachMutate(callback: (item: T, index: number) => T): this;
  /**
   * Reverses items in list: head becomes tail and vice versa. Time complexity = O(n) where n is number of items in list.
   * @returns The list instance - this.
   */
  reverse(): this;
  /**
   * Removes all items from list. Time complexity = O(1).
   * @returns The list instance - this.
   */
  clear(): this;
  /**
   * Time complexity = O(1).
   * @returns True if list is empty, false otherwise.
   */
  isEmpty(): boolean;
  /**
   * Time complexity = O(1).
   * @returns The current number of items stored.
   */
  length(): number;
  /**
   * Time complexity = O(1).
   * @returns The current head value, or null if list is empty.
   */
  head(): T | null;
  /**
   * Time complexity = O(1).
   * @returns The current head node, or null if list is empty.
   */
  headNode(): NodeUnilateral<T> | null;
  /**
   * Time complexity = O(1).
   * @returns The current tail value, or null if list is empty.
   */
  tail(): T | null;
  /**
   * Time complexity = O(1).
   * @returns The current tail node, or null if list is empty.
   */
  tailNode(): NodeUnilateral<T> | null;
}

```

#### Queue

```ts
export { Node };
export default class Queue<T> {
  private _list;
  /**
   * Creates a new instance of a queue (utilizes a singly-linked list).
   * @param values The initial values to populate queue with. If omitted, queue begins empty.
   */
  constructor(values?: T[]);
  /**
   * Adds an item to back of queue. Time complexity = O(1).
   * @param value The item to enqueue.
   * @returns The queue instance - this.
   */
  enqueue(value: T): this;
  /**
   * Removes item at front of queue and returns it. Throws error if queue is empty. Time complexity = O(1).
   * @returns The item at front of queue, or null if queue is empty.
   */
  dequeue(): T | null;
  /**
   * Gets item at specified index. Time complexity = O(n) where n is number of items in queue.
   * @param index The index of item to retrieve.
   * @returns The item at specified index.
   */
  get(index: number): T | null;
  /**
   * @returns An array containing currently held items, ordered from front to back. Time complexity = O(n) where n is number of items in queue.
   */
  getItems(): T[];
  /**
   * Executes a callback function for each item in queue. Time complexity = O(n) where n is number of items in queue.
   * @param callback The function to execute for each item in queue.
   * @returns The queue instance - this.
   */
  forEach(callback: (item: T, index: number) => void): this;
  /**
   * Executes a callback function that replaces each item in queue with result. Time complexity = O(n) where n is number of items in queue.
   * @param callback The function to execute for each item in queue.
   * @returns The queue instance - this.
   */
  forEachMutate(callback: (item: T, index: number) => T): this;
  /**
   * Reverses items in queue: front becomes back and vice versa. Time complexity = O(n) where n is number of items in queue.
   * @returns The queue instance - this.
   */
  reverse(): this;
  /**
   * Removes all items from queue. Time complexity = O(1).
   * @returns The queue instance - this.
   */
  clear(): this;
  /**
   * Time complexity = O(1).
   * @returns True if queue is empty, false otherwise.
   */
  isEmpty(): boolean;
  /**
   * Time complexity = O(1).
   * @returns The current number of items in queue.
   */
  length(): number;
  /**
   * Time complexity = O(1).
   * @returns The item at front of queue, or null if queue is empty.
   */
  first(): T | null;
  /**
   * Time complexity = O(1).
   * @returns The node at front of queue, or null if queue is empty.
   */
  firstNode(): Node<T> | null;
  /**
   * Time complexity = O(1).
   * @returns The item at back of queue, or null if queue is empty.
   */
  last(): T | null;
  /**
   * Time complexity = O(1).
   * @returns The node at back of queue, or null if queue is empty.
   */
  lastNode(): Node<T> | null;
}
```

#### Stack

```ts
export default class Stack<T> {
  private _values;
  private _top;
  private _bottom;
  /**
    * Creates a new instance of a stack (utilizes an array).
    * @param values The initial values to populate stack with. If omitted, stack begins empty.
    */
  constructor(values?: T[]);
  /**
    * Pushes a value onto top of stack. Time complexity = O(1).
    * @param value The value to append.
    * @returns The stack instance - this.
    */
  push(value: T): this;
  /**
    * Removes item at top of stack. Does nothing if stack is empty. Time complexity = O(1).
    * @returns The item at top of stack, or null if stack is empty.
    */
  pop(): T | null;
  /**
    * Time complexity = O(1).
    * @returns The item at top of stack, or null if stack is empty.
    */
  top(): T | null;
  /**
    * Time complexity = O(1).
    * @returns Item at bottom of stack, or null if stack is empty.
    */
  bottom(): T | null;
  /**
    * Time complexity = O(n) where n is number of items in stack.
    * @returns Array containing all currently held items, where first item is bottom and last item is top.
    */
  getItems(): T[];
  /**
    * Clears stack. Time complexity = O(1).
    */
  clear(): this;
  /**
    * Time complexity = O(1).
    * @returns True if stack is empty, false otherwise.
    */
  isEmpty(): boolean;
  /**
    * Time complexity = O(1).
    * @returns Number of items in stack.
    */
  length(): number;
}
```

### Algorithms

#### arrayFirstRepeatingElement

```ts
/**
 * Searches an array for the first repeating element and returns it. Time and space complexity = O(n).
 * @param array The array to search.
 * @returns The first repeating element, null if there are no repeating elements.
 */
export default function arrayFirstRepeatingElement<T>(array: T[]): T | null;
```
