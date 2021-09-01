export class Node<T> {
  public value: T;
  public next: Node<T> | null;

  constructor(value: T, next: Node<T> | null) {
    this.value = value;
    this.next = next;
  }
}

export default class SinglyLinkedList<T> {
  public _head: Node<T> | null;
  public _tail: Node<T> | null;
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
      values.forEach((v) => {
        this.append(v);
      });
    }
  }

  /**
   * Appends a value to the list. Time complexity = O(1).
   * @param value The value to append.
   * @returns The list instance - `this`.
   */
  public append(value: T) {
    const newNode = new Node(value, null);
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
    const newNode = new Node(value, this._head);
    this._head = newNode;
    if (this._length === 0) {
      this._tail = newNode;
    }
    this._length++;
    return this;
  }

  /**
   * Gets the value at an index. Time complexity = O(n) where n is the number of items in the list.
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

    let currentNode = this._head;
    for (let currentIndex = 0; currentIndex < index; currentIndex++) {
      if (currentNode !== null) {
        currentNode = currentNode.next;
      } else {
        throw new Error(
          "couldn't traverse list because a node along path to destination index was null"
        );
      }
    }
    return currentNode;
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

    const trailingNode = this._getNode(index - 1) as Node<T>;
    const newNode = new Node(value, trailingNode.next);
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
      const nodeToRemove = this._head as Node<T>;
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

    const leadingNode = this._getNode(index - 1) as Node<T>;
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
    let second = (this._head as Node<T>).next;
    while (second !== null) {
      const third = second.next;
      second.next = first;
      first = second;
      second = third;
    }
    (this._tail as Node<T>).next = null;
    this._head = first;
    return this;
  }
}
