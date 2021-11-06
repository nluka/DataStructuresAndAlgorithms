import Stack from "../Stack";
import clearStack from "./clearStack";

let s: Stack<any>;

beforeAll(() => (s = new Stack()));

afterEach(() => {
  clearStack(s);
});

describe("Stack.push", () => {
  test("onto empty stack", () => {
    const val = "str";
    s = new Stack();
    s.push(val);
    expect(s._values).toEqual([val]);
    expect(s._top).toBe(val);
    expect(s._bottom).toBe(val);
  });

  test("onto populated stack", () => {
    s = new Stack([1]);
    s.push(2);
    expect(s._values).toEqual([1, 2]);
    expect(s._top).toBe(2);
    expect(s._bottom).toBe(1);
  });
});
