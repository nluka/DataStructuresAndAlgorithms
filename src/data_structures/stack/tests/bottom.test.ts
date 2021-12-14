import Stack from "../Stack";

let s: Stack<any>;

beforeAll(() => (s = new Stack()));

afterEach(() => s.clear());

describe("Stack.bottom", () => {
  test("of empty stack", () => {
    s = new Stack();
    expect(s.bottom()).toBeNull();
  });

  test("of populated stack", () => {
    s = new Stack([1, 2, 3]);
    expect(s.bottom()).toBe(1);
  });
});
