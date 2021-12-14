import Stack from "../Stack";

let s: Stack<any>;

beforeAll(() => (s = new Stack()));

afterEach(() => s.clear());

describe("Stack.push", () => {
  test("onto empty stack", () => {
    const val = "str";
    s = new Stack();
    s.push(val);
    expect(s.getItems()).toEqual([val]);
    expect(s.top()).toBe(val);
    expect(s.bottom()).toBe(val);
  });

  test("onto populated stack", () => {
    s = new Stack([1]);
    s.push(2);
    expect(s.getItems()).toEqual([1, 2]);
    expect(s.top()).toBe(2);
    expect(s.bottom()).toBe(1);
  });
});
