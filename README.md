# data-structs-n-algos

Lightweight NPM package with JavaScript and TypeScript implementations for common data structures and algorithms.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
  - [Data Structures](#data-structures)
    - [Stack](#stack)
      - [Stack Documentation](#stack-documentation)
      - [Stack Example](#stack-example)
  - [Algorithms](#algorithms)
    - [firstRecurringArrayElement](#firstrecurringarrayelement)

## Installation

`npm i data-structs-n-algos`

## Features

### Data Structures

#### Stack

##### Stack Documentation

```ts
/**
 * Creates a new instance of a stack (utilizes an array).
 * @param values The initial values to populate the stack with. If omitted, stack begins empty.
 */
constructor(values?: T[]);

/**
 * @returns true if the stack is empty, false if it isn't. Time complexity = O(1).
 */
isEmpty(): boolean;

/**
 * Pushes a value onto the top of the stack. Time complexity = O(1).
 * @param value The value to append.
 * @returns The stack instance - `this`.
 */
push(value: T): this;

/**
 * @returns The element at the top of the stack, or null if the stack is empty. Time complexity = O(1).
 */
peekTop(): T | null;

/**
 * @returns The element at the bottom of the stack, or null if the stack is empty. Time complexity = O(1).
 */
peekBottom(): T | null;

/**
 * Pops off the top element of the stack (if it isn't empty). Time complexity = O(1).
 * @returns The popped element, or null if the stack is empty.
 */
pop(): T | null | undefined;

/**
 * Clears the stack. Time complexity = O(n) where n is the number of items in the stack. If you don't need a reference to the cleared items, use `clearFast` instead.
 * @returns The cleared values, in the order they were popped.
 */
clear(): T[];

/**
 * Clears the stack. Time complexity = O(1). If you need a reference to the cleared items, use `clear` instead.
 */
clearFast(): void;
```

##### Stack Example

```ts
const stack = new Stack<Number>([1, 2, 3]);
console.log(stack.isEmpty()); // false

stack.push(4);

const item = stack.pop(); // 4
const item = stack.pop(); // 3

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
