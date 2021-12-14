import {
  listGet,
  listInit as listInit,
  listThrowTraversalError,
} from "../utilities/linked-list";

export class NodeUnilateral<T> {
  public value: T;
  public next: NodeUnilateral<T> | null;

  constructor(value: T, next: NodeUnilateral<T> | null) {
    this.value = value;
    this.next = next;
  }
}

export default class SinglyLinkedList<T> {
  private _headNode: NodeUnilateral<T> | null;
  private _tailNode: NodeUnilateral<T> | null;
  private _length: number;

  /**
   * Creates a new instance of a singly-linked list.
   * @param values The inital values to populate list with. If omitted, list begins empty.
   */
  constructor(values?: T[]) {
    this._headNode = null;
    this._tailNode = null;
    this._length = 0;

    if (values !== undefined && values.length > 0) {
      listInit(this, values);
    }
  }

  /**
   * Inserts value at end of list. Time complexity = O(1).
   * @param value The value to append.
   * @returns The list instance - this.
   */
  public append(value: T): this {
    const newNode = new NodeUnilateral(value, null);

    if (this._length === 0) {
      this._headNode = newNode;
    }
    if (this._tailNode !== null) {
      this._tailNode.next = newNode;
    }
    this._tailNode = newNode;
    ++this._length;

    return this;
  }

  /**
   * Inserts value at beginning of list. Time complexity = O(1).
   * @param value The value to prepend.
   * @returns The list instance - this.
   */
  public prepend(value: T): this {
    const newNode = new NodeUnilateral(value, this._headNode);

    this._headNode = newNode;
    if (this._length === 0) {
      this._tailNode = newNode;
    }
    ++this._length;

    return this;
  }

  /**
   * Inserts item at specified index. Time complexity = O(n) where n is number of items in list.
   * @param value The item to insert.
   * @param index The index at which to insert item.
   * @returns The list instance - this.
   */
  public insert(value: T, index: number): this {
    if (index < 0 || index > this._length) {
      throw new RangeError(
        `cannot insert at out of bounds index ${index}, index must be between 0 and ${this._length}`
      );
    }
    if (index === 0) {
      return this.prepend(value);
    }
    if (index === this._length) {
      return this.append(value);
    }

    const trailingNode = this._getNode(index - 1) as NodeUnilateral<T>;
    const newNode = new NodeUnilateral(value, trailingNode.next);
    trailingNode.next = newNode;
    ++this._length;
    return this;
  }

  /**
   * Removes an item at specified index. Throws error is list is empty. Time complexity = O(n) where n is number of items in list.
   * @param index The index of item to remove.
   * @returns The removed item.
   */
  public remove(index: number): T | null {
    if (this._length === 0) {
      throw new Error(`cannot remove from an empty list`);
    }

    if (index === 0) {
      const nodeToRemove = this._headNode as NodeUnilateral<T>;
      const trailingNode = nodeToRemove.next;
      if (trailingNode === null) {
        this._headNode = null;
        this._tailNode = null;
      } else {
        this._headNode = trailingNode;
      }
      --this._length;
      return nodeToRemove.value;
    }

    const leadingNode = this._getNode(index - 1) as NodeUnilateral<T>;
    const nodeToRemove = leadingNode.next;
    leadingNode.next = nodeToRemove !== null ? nodeToRemove.next : null;
    if (this._length === 2) {
      this._tailNode = this._headNode;
    } else if (index === this._length - 1) {
      this._tailNode = leadingNode;
    }
    --this._length;
    return nodeToRemove?.value as T;
  }

  /**
   * Gets item at specified index. Time complexity = O(n) where n is number of items in list.
   * @param index The index of item to retrieve.
   * @returns The item at specified index.
   */
  public get(index: number): T | null {
    return listGet(this, index);
  }

  public _getNode(index: number): NodeUnilateral<T> | null {
    if (this._length === 0) {
      return null;
    }

    let currentNode = this._headNode;
    for (let i = 0; i < index; ++i) {
      if (currentNode === null) {
        listThrowTraversalError();
      } else {
        currentNode = currentNode.next;
      }
    }

    return currentNode;
  }

  /**
   * @returns An array containing currently held items, ordered from head to tail. Time complexity = O(n) where n is number of items in list.
   */
  public getItems(): T[] {
    const values: T[] = [];
    this.forEach((val) => values.push(val));
    return values;
  }

  /**
   * Executes a callback function for each item in list. Time complexity = O(n) where n is number of items in list.
   * @param callback The function to execute for each item in list.
   * @returns The list instance - this.
   */
  public forEach(callback: (item: T, index: number) => void): this {
    let currentNode = this._headNode;
    let index = 0;

    while (currentNode !== null) {
      callback(currentNode.value, index);
      currentNode = currentNode.next;
      ++index;
    }

    return this;
  }

  /**
   * Executes a callback function that replaces each item in list with result. Time complexity = O(n) where n is number of items in list.
   * @param callback The function to execute for each item in list.
   * @returns The list instance - this.
   */
  public forEachMutate(callback: (item: T, index: number) => T): this {
    let currentNode = this._headNode;
    let index = 0;

    while (currentNode !== null) {
      currentNode.value = callback(currentNode.value, index);
      currentNode = currentNode.next;
      ++index;
    }

    return this;
  }

  /**
   * Reverses items in list: head becomes tail and vice versa. Time complexity = O(n) where n is number of items in list.
   * @returns The list instance - this.
   */
  public reverse(): this {
    if (this._length < 2) {
      return this;
    }

    let first = this._headNode;
    this._tailNode = this._headNode;
    let second = (this._headNode as NodeUnilateral<T>).next;
    while (second !== null) {
      const third = second.next;
      second.next = first;
      first = second;
      second = third;
    }
    (this._tailNode as NodeUnilateral<T>).next = null;
    this._headNode = first;
    return this;
  }

  /**
   * Removes all items from list. Time complexity = O(1).
   * @returns The list instance - this.
   */
  public clear(): this {
    this._headNode = null;
    this._tailNode = null;
    this._length = 0;
    return this;
  }

  /**
   * Time complexity = O(1).
   * @returns True if list is empty, false otherwise.
   */
  public isEmpty(): boolean {
    return this._length === 0;
  }

  /**
   * Time complexity = O(1).
   * @returns The current number of items stored.
   */
  public length(): number {
    return this._length;
  }

  /**
   * Time complexity = O(1).
   * @returns The current head value, or null if list is empty.
   */
  public head(): T | null {
    return this._headNode?.value || null;
  }

  /**
   * Time complexity = O(1).
   * @returns The current head node, or null if list is empty.
   */
  public headNode(): NodeUnilateral<T> | null {
    return this._headNode;
  }

  /**
   * Time complexity = O(1).
   * @returns The current tail value, or null if list is empty.
   */
  public tail(): T | null {
    return this._tailNode?.value || null;
  }

  /**
   * Time complexity = O(1).
   * @returns The current tail node, or null if list is empty.
   */
  public tailNode(): NodeUnilateral<T> | null {
    return this._tailNode;
  }
}
