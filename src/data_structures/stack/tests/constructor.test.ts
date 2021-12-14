import Stack from "../Stack";

let s: Stack<any>;

afterEach(() => s.clear());

describe("Stack.constructor", () => {
  test("no values", () => {
    s = new Stack();
    expect(s.getItems()).toEqual([]);
    expect(s.top()).toBeNull();
    expect(s.bottom()).toBeNull();
  });

  test("single value", () => {
    s = new Stack([1]);
    expect(s.getItems()).toEqual([1]);
    expect(s.top()).toBe(1);
    expect(s.bottom()).toBe(1);
  });

  test("multiple values", () => {
    s = new Stack([1, 2, 3]);
    expect(s.getItems()).toEqual([1, 2, 3]);
    expect(s.top()).toBe(3);
    expect(s.bottom()).toBe(1);
  });
});
