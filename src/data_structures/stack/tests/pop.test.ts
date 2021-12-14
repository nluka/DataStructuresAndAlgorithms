import Stack from "../Stack";
import assertStackIsEmpty from "./assertStackIsEmpty";

let s: Stack<any>;

beforeAll(() => (s = new Stack()));

afterEach(() => s.clear());

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
      expect(s.top()).toBe(1);
      expect(s.bottom()).toBe(1);
      expect(s.getItems()).toEqual([1]);
    });

    test("3 items", () => {
      s = new Stack([1, 2, 3]);
      expect(s.pop()).toBe(3);
      expect(s.top()).toBe(2);
      expect(s.bottom()).toBe(1);
      expect(s.getItems()).toEqual([1, 2]);
    });

    test("4 items", () => {
      s = new Stack([1, 2, 3, 4]);
      expect(s.pop()).toBe(4);
      expect(s.top()).toBe(3);
      expect(s.bottom()).toBe(1);
      expect(s.getItems()).toEqual([1, 2, 3]);
    });
  });
});
