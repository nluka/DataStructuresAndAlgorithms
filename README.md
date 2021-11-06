# data-structs-n-algos

Lightweight NPM package with JavaScript and TypeScript implementations for common data structures and algorithms.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
  - [Data Structures](#data-structures)
    - [Stack](#stack)
      - [Stack Documentation](#stack-documentation)
      - [Stack Example](#stack-example)
    - [SinglyLinkedList](#singlylinkedlist)
      - [SinglyLinkedList Documentation](#singlylinkedlist-documentation)
      - [SinglyLinkedList Example](#singlylinkedlist-example)
  - [Algorithms](#algorithms)
    - [arrayFirstRepeatingElement](#arrayFirstRepeatingElement)
      - [arrayFirstRepeatingElement Documentation](#arrayFirstRepeatingElement-documentation)
      - [arrayFirstRepeatingElement Example](#arrayFirstRepeatingElement-example)

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
   * @returns An array containing all currently held values, where the first element is the bottom and the last element is the top.
   */
  getValues(): T[];

  /**
   * Clears the stack. Time complexity = O(1).
   */
  clear(): void;

  /**
   * @returns `true` if the stack is empty, `false` otherwise. Time complexity = O(1).
   */
  isEmpty(): boolean;

  /**
   * @returns The number of items in the stack. Time complexity = O(1).
   */
  height(): number;
}
```

##### Stack Example

```ts
// first, npm install data-structs-n-algos
import { Stack } from 'data-structs-n-algos';

const emptyStack = new Stack<string>(); // starts off empty

//                               b  t
const stack = new Stack<Number>([1, 2]);

//                         b        t
stack.push(3).push(4); // [1, 2, 3, 4]

stack.pop(); // returns 4
stack.pop(); // returns 3
stack.pop(); // returns 2

//                 b  t
stack.push(2); // [1, 2]

stack.peekTop(); // returns 2
stack.peekBottom(); // returns 1

stack.getValues(); // returns [1, 2]

stack.clear();
stack.length(); // returns 0
stack.isEmpty(); // returns true
```

#### SinglyLinkedList

##### SinglyLinkedList Documentation

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
   * Inserts a value at the end of the list. Time complexity = O(1).
   * @param value The value to append.
   * @returns The list instance - `this`.
   */
  append(value: T): this;

  /**
   * Inserts a value at the beginning of the list. Time complexity = O(1).
   * @param value The value to prepend.
   * @returns The list instance - `this`.
   */
  prepend(value: T): this;

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
  remove(index: number): T;

  /**
   * Gets the value at `index`. Time complexity = O(n) where n is the number of items in the list.
   * @param index The index of the value to find.
   * @returns The value of the node at the given index.
   */
  get(index: number): T | null;

  _getNode(index: number): NodeUnilateral<T> | null;

  /**
   * @returns An array containing the held currently held values, ordered from head to tail. Time complexity = O(n) where n is the number of items in the list.
   */
  getValues(): T[];

  /**
   * Executes a callback function for each item in the list. Time complexity = O(n) where n is the number of items in the list.
   * @param callback The function to execute for each item in the list.
   */
  forEachItem(callback: (item: T, index: number) => void): void;

  /**
   * Executes a callback function that replaces each item in the list with the result. Time complexity = O(n) where n is the number of items in the list.
   * @param callback The function to execute for each item in the list.
   */
  forEachItemMutate(callback: (item: T, index: number) => T): void;

  /**
   * Reverses the values in the list - the head becomes the tail and vice versa. Time complexity = O(n) where n is the number of items in the list.
   * @returns The list instance - `this`.
   */
  reverse(): this;

  /**
   * Removes all items from the list. Time complexity = O(1).
   * @returns The list instance - `this`.
   */
  clear(): this;

  /**
   * Time complexity = O(1).
   * @returns `true` if list is empty, `false` otherwise.
   */
  isEmpty(): boolean;

  /**
   * Time complexity = O(1).
   * @returns The current number of items stored.
   */
  length(): number;

  /**
   * Time complexity = O(1).
   * @returns The current head value, or `null` if list is empty.
   */
  head(): T | null;

  /**
   * Time complexity = O(1).
   * @returns The current tail value, or `null` if list is empty.
   */
  tail(): T | null;
}

}
```

##### SinglyLinkedList Example

```ts
// first, npm install data-structs-n-algos
import { SinglyLinkedList } from 'data-structs-n-algos';

const emptyList = new SinglyLinkedList<string>(); // starts off empty

//                                         h     t
const list = new SinglyLinkedList<Number>([1, 2, 3]);
list.isEmpty(); // returns false

//                             h         t
list.prepend(0.5); // list = [0.5, 1, 2, 3]
list.head(); // returns 0.5

//                                      h     t
list.remove(0); // returns 0.5, list = [1, 2, 3]

//                                                                           h, t
list.remove(list.length() - 1); // returns 3 (removes last element), list = [1, 2]

//                         h  t
list.reverse(); // list = [2, 1]

list.getValues(); // return [2, 1]

list.clear();
list.length(); // returns 0
list.isEmpty(); // returns true
```

### Algorithms

#### arrayFirstRepeatingElement

##### arrayFirstRepeatingElement Documentation

```ts
/**
 * Searches an array for the first repeating element and returns it. Linear time and space complexity - O(n).
 * @param array The array to search.
 * @returns The first repeating element in `array` if one exists, null otherwise.
 */
export default function arrayFirstRepeatingElement<T>(array: T[]): T | null;
```

##### arrayFirstRepeatingElement Example

```ts
// first, npm install data-structs-n-algos
import { arrayFirstRepeatingElement } from 'data-structs-n-algos';

arrayFirstRepeatingElement([1, 2, 3]); // returns null
arrayFirstRepeatingElement([1, 2, 3, 1]); // returns 1
```
