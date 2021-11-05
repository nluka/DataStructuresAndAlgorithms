import {
  listAppend,
  listGet,
  listInit as listInit,
  listPrepend,
  listTraverseFromHead,
} from './utilities/linked-list';

export class NodeUnilateral<T> {
  public value: T;
  public next: NodeUnilateral<T> | null;

  constructor(value: T, next: NodeUnilateral<T> | null) {
    this.value = value;
    this.next = next;
  }
}

export default class SinglyLinkedList<T> {
  public _head: NodeUnilateral<T> | null;
  public _tail: NodeUnilateral<T> | null;
  public _length: number;

  /**
   * Creates a new instance of a singly linked list.
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
    const newNode = new NodeUnilateral(value, null);
    listAppend(this, newNode);
    return this;
  }

  /**
   * Prepends a value to the list. Time complexity = O(1).
   * @param value The value to prepend.
   * @returns The list instance - `this`.
   */
  public prepend(value: T) {
    const newNode = new NodeUnilateral(value, this._head);
    listPrepend(this, newNode);
    return this;
  }

  /**
   * Gets the value at an index. Time complexity = O(n) where n is the number of items in the list.
   * @param index The index of the value to find.
   * @returns The value of the node at the given index.
   */
  public get(index: number): T | null {
    return listGet(this, index);
  }

  public _getNode(index: number): NodeUnilateral<T> | null {
    if (this._length === 0) {
      return null;
    }

    return listTraverseFromHead(this, index) as NodeUnilateral<T>;
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
   * Inserts a value at the specified index. Time complexity = O(n) where n is the number of items in the list.
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

    const trailingNode = this._getNode(index - 1) as NodeUnilateral<T>;
    const newNode = new NodeUnilateral(value, trailingNode.next);
    trailingNode.next = newNode;
    this._length++;
    return this;
  }

  /**
   * Removes a value at the specified index. Time complexity = O(n) where n is the number of items in the list.
   * @param index The index of the value to remove.
   * @returns The removed value.
   */
  public remove(index: number) {
    if (this._length === 0) {
      throw new Error(`cannot remove from an empty list`);
    }

    if (index === 0) {
      const nodeToRemove = this._head as NodeUnilateral<T>;
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

    const leadingNode = this._getNode(index - 1) as NodeUnilateral<T>;
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
    let second = (this._head as NodeUnilateral<T>).next;
    while (second !== null) {
      const third = second.next;
      second.next = first;
      first = second;
      second = third;
    }
    (this._tail as NodeUnilateral<T>).next = null;
    this._head = first;
    return this;
  }

  /**
   * Time complexity = O(1).
   * @returns `true` if list is empty, `false` otherwise.
   */
  public isEmpty() {
    return this.length() === 0;
  }

  /**
   * Time complexity = O(1).
   * @returns The current length.
   */
  public length() {
    return this._length;
  }

  /**
   * Time complexity = O(1).
   * @returns The current head value, or null if list is empty.
   */
  public head() {
    if (this._head?.value === undefined) {
      return null;
    }
    return this._head.value;
  }

  /**
   * Time complexity = O(1).
   * @returns The current tail value, or null if list is empty.
   */
  public tail() {
    if (this._tail?.value === undefined) {
      return null;
    }
    return this._tail.value;
  }
}
