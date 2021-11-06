import Stack from "../Stack";
import assertStackIsEmpty from "./assertStackIsEmpty";

let s: Stack<any>;

describe("Stack.clear", () => {
  function assert(stackValues: any[]) {
    test(`should correctly clear the stack when values=${JSON.stringify(
      stackValues
    )}`, () => {
      s = new Stack(stackValues);
      s.clear();
      assertStackIsEmpty(s);
    });
  }

  assert([]);
  assert([1]);
  assert(["1", "2"]);
  assert([true, true, false]);
  assert([{}, {}, {}, {}]);
});
