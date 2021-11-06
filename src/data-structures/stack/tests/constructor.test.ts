import Stack from "../Stack";
import clearStack from "./clearStack";

let s: Stack<any>;

afterEach(() => {
  clearStack(s);
});

describe("Stack.constructor", () => {
  test("no values", () => {
    s = new Stack();
    expect(s._values).toEqual([]);
    expect(s._top).toBeNull();
    expect(s._bottom).toBeNull();
  });

  test("single value", () => {
    s = new Stack([1]);
    expect(s._values).toEqual([1]);
    expect(s._top).toBe(1);
    expect(s._bottom).toBe(1);
  });

  test("multiple values", () => {
    s = new Stack([1, 2, 3]);
    expect(s._values).toEqual([1, 2, 3]);
    expect(s._top).toBe(3);
    expect(s._bottom).toBe(1);
  });
});
