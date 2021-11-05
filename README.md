# data-structs-n-algos

Lightweight NPM package with JavaScript and TypeScript implementations for common data structures and algorithms.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
  - [Data Structures](#data-structures)
    - [Stack](#stack)
      - [Stack Documentation](#stack-documentation)
      - [Stack Example](#stack-example)
    - [Singly Linked List](#singly-linked-list)
      - [Singly Linked List Documentation](#singly-linked-list-documentation)
      - [Singly Linked List Example](#singly-linked-list-example)
  - [Algorithms](#algorithms)
    - [firstRecurringArrayElement](#firstrecurringarrayelement)

## Installation

`npm i data-structs-n-algos`

## Features

### Data Structures

#### Stack

##### Stack Documentation

```ts
export default class Stack<T> {
  _values: T[];
  _top: T | null;
  _bottom: T | null;

  /**
   * Creates a new instance of a stack (utilizes an array).
   * @param values The initial values to populate the stack with. If omitted, stack begins empty.
   */
  constructor(values?: T[]);

  /**
   * Pushes a value onto the top of the stack. Time complexity = O(1).
   * @param value The value to append.
   * @returns The stack instance - `this`.
   */
  push(value: T): this;

  /**
   * Pops off the top element of the stack (if it isn't empty). Time complexity = O(1).
   * @returns The popped element, or null if the stack is empty.
   */
  pop(): T | null | undefined;

  /**
   * @returns The element at the top of the stack, or null if the stack is empty. Time complexity = O(1).
   */
  peekTop(): T | null;

  /**
   * @returns The element at the bottom of the stack, or null if the stack is empty. Time complexity = O(1).
   */
  peekBottom(): T | null;

  /**
   * Clears the stack. Time complexity = O(n) where n is the number of items in the stack. If you don't need a reference to the cleared items, use `clearFast` instead.
   * @returns The cleared values, in the order they were popped.
   */
  clear(): T[];

  /**
   * Clears the stack. Time complexity = O(1). If you need a reference to the cleared items, use `clear` instead.
   */
  clearFast(): void;

  /**
   * @returns `true` if the stack is empty, `false` otherwise. Time complexity = O(1).
   */
  isEmpty(): boolean;

  /**
   * @returns The number of items in the stack. Time complexity = O(1).
   */
  length(): number;
}
```

##### Stack Example

```ts
// first, npm install data-structs-n-algos
import Stack from 'data-structs-n-algos';

const stack = new Stack<Number>([1, 2, 3]); // 1 is bottom, 3 is top
console.log(stack.isEmpty()); // false

stack.push(4);

let item;
item = stack.pop(); // item === 4
item = stack.pop(); // item === 3

const top = stack.peekTop(); // 2
const bottom = stack.peekBottom(); // 1

const remainder = stack.clear(); // use clearFast to avoid returned array
console.log(remainder); // [1, 2]

console.log(stack.isEmpty()); // true
```

#### Singly Linked List

##### Singly Linked List Documentation

```ts
export declare class NodeUnilateral<T> {
  value: T;
  next: NodeUnilateral<T> | null;
  constructor(value: T, next: NodeUnilateral<T> | null);
}

export default class SinglyLinkedList<T> {
  _head: NodeUnilateral<T> | null;
  _tail: NodeUnilateral<T> | null;
  _length: number;

  /**
   * Creates a new instance of a singly linked list.
   * @param values The inital values to populate the list with. If omitted, list begins empty.
   */
  constructor(values?: T[]);

  /**
   * Appends a value to the list. Time complexity = O(1).
   * @param value The value to append.
   * @returns The list instance - `this`.
   */
  append(value: T): this;

  /**
   * Prepends a value to the list. Time complexity = O(1).
   * @param value The value to prepend.
   * @returns The list instance - `this`.
   */
  prepend(value: T): this;

  /**
   * Gets the value at an index. Time complexity = O(n) where n is the number of items in the list.
   * @param index The index of the value to find.
   * @returns The value of the node at the given index.
   */
  get(index: number): T | null;

  _getNode(index: number): NodeUnilateral<T> | null;

  /**
   * @returns An array of all the held values ordered from head to tail. Time complexity = O(n) where n is the number of items in the list.
   */
  getAll(): T[];

  /**
   * Inserts a value at the specified index. Time complexity = O(n) where n is the number of items in the list.
   * @param value The value to insert.
   * @param index The index at which to insert the value.
   * @returns The list instance - `this`.
   */
  insert(value: T, index: number): this;

  /**
   * Removes a value at the specified index. Time complexity = O(n) where n is the number of items in the list.
   * @param index The index of the value to remove.
   * @returns The removed value.
   */
  remove(index: number): T | null;

  /**
   * Reverses the values in the list - the head becomes the tail and vice versa. Time complexity = O(n) where n is the number of items in the list.
   * @returns The list instance - `this`.
   */
  reverse(): this;

  /**
   * Time complexity = O(1).
   * @returns `true` if list is empty, `false` otherwise.
   */
  isEmpty(): boolean;

  /**
   * Time complexity = O(1).
   * @returns The current length.
   */
  length(): number;

  /**
   * Time complexity = O(1).
   * @returns The current head value, or null if list is empty.
   */
  head(): T | null;

  /**
   * Time complexity = O(1).
   * @returns The current tail value, or null if list is empty.
   */
  tail(): T | null;
}
```

##### Singly Linked List Example

```ts
// first, npm install data-structs-n-algos
import SinglyLinkedList from 'data-structs-n-algos';

const list = new SinglyLinkedList<Number>([1, 2, 3]); // 1 is head, 3 is tail
console.log(list.isEmpty()); // false

stack.push(4);

let item;
item = stack.pop(); // item === 4
item = stack.pop(); // item === 3

const top = stack.peekTop(); // 2
const bottom = stack.peekBottom(); // 1

const remainder = stack.clear(); // use clearFast to avoid returned array
console.log(remainder); // [1, 2]

console.log(stack.isEmpty()); // true
```

### Algorithms

#### firstRecurringArrayElement

```ts
/**
 * Searches an array for the first repeating element and returns it. Linear time and space complexity - O(n).
 * @param array The array to search.
 * @returns The first repeating element in `array` if one exists, null otherwise.
 */
export default function firstRecurringArrayElement<T>(array: T[]): T | null;
```
