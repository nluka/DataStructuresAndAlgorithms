import Stack from "../Stack";

let s: Stack<any>;

beforeAll(() => (s = new Stack()));

afterEach(() => s.clear());

describe("Stack.top", () => {
  test("of empty stack", () => {
    s = new Stack();
    expect(s.top()).toBeNull();
  });

  test("of populated stack", () => {
    s = new Stack([1, 2, 3]);
    expect(s.top()).toBe(3);
  });
});
