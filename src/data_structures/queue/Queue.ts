import SinglyLinkedList, {
  NodeUnilateral as Node,
} from "../singly_linked_list/SinglyLinkedList";
import { listGet } from "../utilities/linked-list";

export { Node };

export default class Queue<T> {
  private _list: SinglyLinkedList<T>;

  /**
   * Creates a new instance of a queue (utilizes a singly-linked list).
   * @param values The initial values to populate queue with. If omitted, queue begins empty.
   */
  constructor(values?: T[]) {
    this._list = new SinglyLinkedList(values);
  }

  /**
   * Adds an item to back of queue. Time complexity = O(1).
   * @param value The item to enqueue.
   * @returns The queue instance - this.
   */
  public enqueue(value: T): this {
    this._list.append(value);
    return this;
  }

  /**
   * Removes item at front of queue and returns it. Throws error if queue is empty. Time complexity = O(1).
   * @returns The item at front of queue, or null if queue is empty.
   */
  public dequeue(): T | null {
    return this._list.remove(0);
  }

  /**
   * Gets item at specified index. Time complexity = O(n) where n is number of items in queue.
   * @param index The index of item to retrieve.
   * @returns The item at specified index.
   */
  public get(index: number): T | null {
    return listGet(this._list, index);
  }

  /**
   * @returns An array containing currently held items, ordered from front to back. Time complexity = O(n) where n is number of items in queue.
   */
  public getItems(): T[] {
    return this._list.getItems();
  }

  /**
   * Executes a callback function for each item in queue. Time complexity = O(n) where n is number of items in queue.
   * @param callback The function to execute for each item in queue.
   * @returns The queue instance - this.
   */
  public forEach(callback: (item: T, index: number) => void): this {
    this._list.forEach(callback);
    return this;
  }

  /**
   * Executes a callback function that replaces each item in queue with result. Time complexity = O(n) where n is number of items in queue.
   * @param callback The function to execute for each item in queue.
   * @returns The queue instance - this.
   */
  public forEachMutate(callback: (item: T, index: number) => T): this {
    this._list.forEachMutate(callback);
    return this;
  }

  /**
   * Reverses items in queue: front becomes back and vice versa. Time complexity = O(n) where n is number of items in queue.
   * @returns The queue instance - this.
   */
  public reverse(): this {
    this._list.reverse();
    return this;
  }

  /**
   * Removes all items from queue. Time complexity = O(1).
   * @returns The queue instance - this.
   */
  public clear(): this {
    this._list.clear();
    return this;
  }

  /**
   * Time complexity = O(1).
   * @returns True if queue is empty, false otherwise.
   */
  public isEmpty(): boolean {
    return this._list.isEmpty();
  }

  /**
   * Time complexity = O(1).
   * @returns The current number of items in queue.
   */
  public length(): number {
    return this._list.length();
  }

  /**
   * Time complexity = O(1).
   * @returns The item at front of queue, or null if queue is empty.
   */
  public first(): T | null {
    return this._list.head();
  }

  /**
   * Time complexity = O(1).
   * @returns The node at front of queue, or null if queue is empty.
   */
  public firstNode(): Node<T> | null {
    return this._list.headNode();
  }

  /**
   * Time complexity = O(1).
   * @returns The item at back of queue, or null if queue is empty.
   */
  public last(): T | null {
    return this._list.tail();
  }

  /**
   * Time complexity = O(1).
   * @returns The node at back of queue, or null if queue is empty.
   */
  public lastNode(): Node<T> | null {
    return this._list.tailNode();
  }
}
