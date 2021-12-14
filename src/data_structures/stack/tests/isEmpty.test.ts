import Stack from "../Stack";

let s: Stack<any>;

beforeAll(() => (s = new Stack()));

afterEach(() => s.clear());

describe("Stack.isEmpty", () => {
  describe("returns", () => {
    test("true when empty", () => {
      expect(s.isEmpty()).toBe(true);
    });

    test("false when not empty", () => {
      const val = 1;

      s.push(val);

      expect(s.isEmpty()).toBe(false);
    });
  });
});
