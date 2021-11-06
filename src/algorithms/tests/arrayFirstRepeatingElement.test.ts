import { describe, expect, test } from "@jest/globals";
import arrayFirstRepeatingElement from "../arrayFirstRepeatingElement";

describe("arrayFirstRepeatingElement", () => {
  describe("should return", () => {
    function assert(array: any[], expected: any) {
      test(`${expected} when array=${JSON.stringify(array)}`, () => {
        expect(arrayFirstRepeatingElement(array)).toBe(expected);
      });
    }

    assert([], null);
    assert([1, 2, 3, 1], 1);
    assert([1, 2, 3, 1, 4], 1);
    assert([1, 2, 3], null);
    assert([1], null);
    assert(["1", "2", "3", "1"], "1");
    assert(["1", "1", "1"], "1");
    assert([true, false], null);
    assert([true, true], true);
    assert([false, false], false);
    assert([{}, {}], null);
    {
      const o1 = {};
      const o2 = {};
      const o3 = o1;
      assert([o1, o2, o3], o1);
    }
    assert([undefined, undefined], undefined);
    assert([null, null], null);
  });
});
