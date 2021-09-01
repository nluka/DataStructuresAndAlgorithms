import { listInit } from '../src/data-structures/utilities/linked-list';

export class NodeBilateral<T> {
  public value: T;
  public next: NodeBilateral<T> | null;
  public prev: NodeBilateral<T> | null;

  constructor(
    value: T,
    next: NodeBilateral<T> | null,
    prev: NodeBilateral<T> | null
  ) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export default class DoublyLinkedList<T> {
  public _head: NodeBilateral<T> | null;
  public _tail: NodeBilateral<T> | null;
  public _length: number;

  /**
   * Creates a new instance of a doubly linked list.
   * @param values The inital values to populate the list with. If omitted, list begins empty.
   */
  constructor(values?: T[]) {
    this._head = null;
    this._tail = null;
    this._length = 0;

    if (values !== undefined && values.length > 0) {
      listInit(this, values);
    }
  }

  /**
   * Appends a value to the list. Time complexity = O(1).
   * @param value The value to append.
   * @returns The list instance - `this`.
   */
  public append(value: T) {
    const newNode = new NodeBilateral(value, null, this._tail);
    if (this._length === 0) {
      this._head = newNode;
    }
    if (this._tail !== null) {
      this._tail.next = newNode;
    }
    this._tail = newNode;
    this._length++;
    return this;
  }

  /**
   * Prepends a value to the list. Time complexity = O(1).
   * @param value The value to prepend.
   * @returns The list instance - `this`.
   */
  public prepend(value: T) {
    const newNode = new NodeBilateral(value, this._head, null);
    this._head = newNode;
    if (this._length === 0) {
      this._tail = newNode;
    }
    this._length++;
    return this;
  }

  /**
   * Gets the value at an index. Time complexity = O(n/2) where n is the number of items in the list.
   * @param index The index of the value to find.
   * @returns The value of the node at the given index.
   */
  public get(index: number) {
    if (index < 0 || (this._length > 0 && index > this._length - 1)) {
      throw new RangeError(`index ${index} is not in bounds`);
    }

    const node = this._getNode(index);
    return node !== null ? node.value : null;
  }

  public _getNode(index: number) {
    if (this._length === 0) {
      return null;
    }

    const middleIndex = (this._length - 1) / 2;
    let currentNode: NodeBilateral<T> | null;

    if (index <= middleIndex) {
      // traverse from head
      currentNode = this._head;
      for (let i = 0; i < index; i++) {
        if (currentNode !== null) {
          currentNode = currentNode.next;
        } else {
          this._throwTraversalError();
        }
      }
    } else {
      // traverse from tail
      currentNode = this._tail;
      for (let i = this._length - 1; i > index; i--) {
        if (currentNode !== null) {
          currentNode = currentNode.next;
        } else {
          this._throwTraversalError();
        }
      }
    }

    return currentNode;
  }

  private _throwTraversalError() {
    throw new Error(
      "couldn't traverse list because a node along path to destination index was null"
    );
  }

  /**
   * @returns An array of all the held values ordered from head to tail. Time complexity = O(n) where n is the number of items in the list.
   */
  public getAll() {
    const values = [];
    let currentNode = this._head;
    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
  }

  /**
   * Inserts a value at the specified index. Time complexity = O(n/2) where n is the number of items in the list.
   * @param value The value to insert.
   * @param index The index at which to insert the value.
   * @returns The list instance - `this`.
   */
  public insert(value: T, index: number) {
    if (index === 0) {
      return this.prepend(value);
    }
    if (index === this._length) {
      return this.append(value);
    }
    if (index < 0 || index > this._length) {
      throw new RangeError(
        `cannot insert at index ${index}, index must be between 0 and ${this._length}`
      );
    }

    const trailingNode = this._getNode(index - 1) as NodeBilateral<T>;
    const newNode = new NodeBilateral(value, trailingNode.next, trailingNode);
    trailingNode.next = newNode;
    this._length++;
    return this;
  }

  /**
   * Removes a value at the specified index. Time complexity = O(n/2) where n is the number of items in the list.
   * @param index The index of the value to remove.
   * @returns The removed value.
   */
  public remove(index: number) {
    if (this._length === 0) {
      throw new Error(`cannot remove from an empty list`);
    }

    if (index === 0) {
      const nodeToRemove = this._head as NodeBilateral<T>;
      const trailingNode = nodeToRemove.next;
      if (trailingNode === null) {
        this._head = null;
        this._tail = null;
      } else {
        this._head = trailingNode;
      }
      this._length--;
      return nodeToRemove.value;
    }

    const leadingNode = this._getNode(index - 1) as NodeBilateral<T>;
    const nodeToRemove = leadingNode.next;
    leadingNode.next = nodeToRemove !== null ? nodeToRemove.next : null;
    if (this._length === 2) {
      this._tail = this._head;
    } else if (index === this._length - 1) {
      this._tail = leadingNode;
    }
    this._length--;
    return nodeToRemove === null ? null : nodeToRemove.value;
  }

  /**
   * Reverses the values in the list - the head becomes the tail and vice versa. Time complexity = O(n) where n is the number of items in the list.
   * @returns The list instance - `this`.
   */
  public reverse() {
    if (this._length < 2) {
      return this;
    }

    let first = this._head;
    this._tail = this._head;
    let second = (this._head as NodeBilateral<T>).next;
    while (second !== null) {
      const third = second.next;
      second.next = first;
      first = second;
      second = third;
    }
    (this._tail as NodeBilateral<T>).next = null;
    this._head = first;
    return this;
  }
}
