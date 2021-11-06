import Stack from "../Stack";
import clearStack from "./clearStack";

let s: Stack<any>;

beforeAll(() => (s = new Stack()));

afterEach(() => {
  clearStack(s);
});

describe("Stack.peekBottom", () => {
  test("of empty stack", () => {
    s = new Stack();
    expect(s.peekBottom()).toBeNull();
  });

  test("of populated stack", () => {
    s = new Stack([1, 2, 3]);
    expect(s.peekBottom()).toBe(1);
  });
});
