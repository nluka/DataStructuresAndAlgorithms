import Stack from "../Stack";
import clearStack from "./clearStack";

let s: Stack<any>;

beforeAll(() => (s = new Stack()));

afterEach(() => {
  clearStack(s);
});

describe("Stack.peekTop", () => {
  test("of empty stack", () => {
    s = new Stack();
    expect(s.peekTop()).toBeNull();
  });

  test("of populated stack", () => {
    s = new Stack([1, 2, 3]);
    expect(s.peekTop()).toBe(3);
  });
});
