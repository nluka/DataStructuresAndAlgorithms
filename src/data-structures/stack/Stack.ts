export default class Stack<T> {
  public _values: T[];
  public _top: T | null;
  public _bottom: T | null;

  /**
   * Creates a new instance of a stack (utilizes an array).
   * @param values The initial values to populate the stack with. If omitted, stack begins empty.
   */
  constructor(values?: T[]) {
    this._values = values !== undefined ? [...values] : [];

    this._top =
      values !== undefined && values.length > 0
        ? (values[values.length - 1] as T)
        : null;

    this._bottom =
      values !== undefined && values.length > 0 ? (values[0] as T) : null;
  }

  /**
   * Pushes a value onto the top of the stack. Time complexity = O(1).
   * @param value The value to append.
   * @returns The stack instance - `this`.
   */
  public push(value: T) {
    if (this.isEmpty()) {
      this._bottom = value;
    }
    this._values.push(value);
    this._top = value;
    return this;
  }

  /**
   * Pops off the top element of the stack (if it isn't empty). Time complexity = O(1).
   * @returns The popped element, or null if the stack is empty.
   */
  public pop() {
    if (this.isEmpty()) {
      return null;
    }

    if (this._values.length === 1) {
      this._top = null;
      this._bottom = null;
    } else {
      this._top = this._values[this._values.length - 2] as T;
    }

    return this._values.pop();
  }

  /**
   * @returns The element at the top of the stack, or null if the stack is empty. Time complexity = O(1).
   */
  public peekTop() {
    return this.isEmpty() ? null : this._top;
  }

  /**
   * @returns The element at the bottom of the stack, or null if the stack is empty. Time complexity = O(1).
   */
  public peekBottom() {
    return this.isEmpty() ? null : this._bottom;
  }

  /**
   * @returns An array containing all currently held values, where the first element is the bottom and the last element is the top.
   */
  public getValues(): T[] {
    return [...this._values];
  }

  /**
   * Clears the stack. Time complexity = O(1).
   */
  public clear(): void {
    this._values = [];
    this._top = null;
    this._bottom = null;
  }

  /**
   * @returns `true` if the stack is empty, `false` otherwise. Time complexity = O(1).
   */
  public isEmpty() {
    return this._values.length === 0;
  }

  /**
   * @returns The number of items in the stack. Time complexity = O(1).
   */
  public height() {
    return this._values.length;
  }
}
