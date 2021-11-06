import Stack from "../Stack";
import clearStack from "./clearStack";

let s: Stack<any>;

beforeAll(() => (s = new Stack()));

afterEach(() => {
  clearStack(s);
});

describe("Stack.isEmpty", () => {
  describe("returns", () => {
    test("true when empty", () => {
      expect(s.isEmpty()).toBe(true);
    });

    test("false when not empty", () => {
      const val = 1;

      // Simulate push
      s._values = [val];
      s._top = val;
      s._bottom = val;

      expect(s.isEmpty()).toBe(false);
    });
  });
});
