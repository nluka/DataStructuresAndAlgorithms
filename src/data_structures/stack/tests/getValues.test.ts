import Stack from "../Stack";

let s: Stack<any>;

describe("Stack.getItems", () => {
  function assert(stackValues: any[]) {
    test(`should correctly return the items in the stack when stackValues=${JSON.stringify(
      stackValues
    )}`, () => {
      s = new Stack(stackValues);
      const result = s.getItems();
      expect(result).toEqual(stackValues);
      expect(result).not.toBe(stackValues); // make sure reference is different
    });
  }

  assert([]);
  assert([1]);
  assert(["1", "2"]);
  assert([true, true, false]);
  assert([{}, {}, {}, {}]);
});
