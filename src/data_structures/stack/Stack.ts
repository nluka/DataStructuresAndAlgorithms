export default class Stack<T> {
  private _values: T[];
  private _top: T | null;
  private _bottom: T | null;

  /**
   * Creates a new instance of a stack (utilizes an array).
   * @param values The initial values to populate stack with. If omitted, stack begins empty.
   */
  constructor(values?: T[]) {
    this._values = values !== undefined ? [...values] : [];

    if (values === undefined) {
      this._top = null;
    } else {
      this._top = values[values.length - 1] || null;
    }

    if (values === undefined) {
      this._bottom = null;
    } else {
      this._bottom = values[0] || null;
    }
  }

  /**
   * Pushes a value onto top of stack. Time complexity = O(1).
   * @param value The value to append.
   * @returns The stack instance - this.
   */
  public push(value: T): this {
    if (this.isEmpty()) {
      this._bottom = value;
    }
    this._values.push(value);
    this._top = value;

    return this;
  }

  /**
   * Removes item at top of stack. Does nothing if stack is empty. Time complexity = O(1).
   * @returns The item at top of stack, or null if stack is empty.
   */
  public pop(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    if (this._values.length === 1) {
      this._top = null;
      this._bottom = null;
    } else {
      this._top = this._values[this._values.length - 2] as T;
    }

    return this._values.pop() || null;
  }

  /**
   * Time complexity = O(1).
   * @returns The item at top of stack, or null if stack is empty.
   */
  public top(): T | null {
    return this._top || null;
  }

  /**
   * Time complexity = O(1).
   * @returns Item at bottom of stack, or null if stack is empty.
   */
  public bottom(): T | null {
    return this._bottom || null;
  }

  /**
   * Time complexity = O(n) where n is number of items in stack.
   * @returns Array containing all currently held items, where first item is bottom and last item is top.
   */
  public getItems(): T[] {
    return [...this._values];
  }

  /**
   * Clears stack. Time complexity = O(1).
   */
  public clear(): this {
    this._values = [];
    this._top = null;
    this._bottom = null;
    return this;
  }

  /**
   * Time complexity = O(1).
   * @returns True if stack is empty, false otherwise.
   */
  public isEmpty(): boolean {
    return this._values.length === 0;
  }

  /**
   * Time complexity = O(1).
   * @returns Number of items in stack.
   */
  public length(): number {
    return this._values.length;
  }
}
