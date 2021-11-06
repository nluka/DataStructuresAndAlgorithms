import Stack from "../Stack";

let s: Stack<any>;

describe("Stack.getValues", () => {
  function assert(stackValues: any[]) {
    test(`should correctly return the values of the when stackValues=${JSON.stringify(
      stackValues
    )}`, () => {
      s = new Stack(stackValues);
      const result = s.getValues();
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
