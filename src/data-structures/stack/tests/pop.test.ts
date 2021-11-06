import Stack from "../Stack";
import assertStackIsEmpty from "./assertStackIsEmpty";
import clearStack from "./clearStack";

let s: Stack<any>;

beforeAll(() => (s = new Stack()));

afterEach(() => {
  clearStack(s);
});

describe("Stack.pop", () => {
  test("empty stack", () => {
    expect(s.pop()).toBeNull();
    assertStackIsEmpty(s);
  });

  describe("stack containing", () => {
    test("1 item", () => {
      s = new Stack([1]);
      expect(s.pop()).toBe(1);
      assertStackIsEmpty(s);
    });

    test("2 items", () => {
      s = new Stack([1, 2]);
      expect(s.pop()).toBe(2);
      expect(s._top).toBe(1);
      expect(s._bottom).toBe(1);
      expect(s._values).toEqual([1]);
    });

    test("3 items", () => {
      s = new Stack([1, 2, 3]);
      expect(s.pop()).toBe(3);
      expect(s._top).toBe(2);
      expect(s._bottom).toBe(1);
      expect(s._values).toEqual([1, 2]);
    });

    test("4 items", () => {
      s = new Stack([1, 2, 3, 4]);
      expect(s.pop()).toBe(4);
      expect(s._top).toBe(3);
      expect(s._bottom).toBe(1);
      expect(s._values).toEqual([1, 2, 3]);
    });
  });
});
