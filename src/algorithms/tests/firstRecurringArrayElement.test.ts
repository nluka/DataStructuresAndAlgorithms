import { describe, expect, test } from '@jest/globals';
import firstRecurringArrayElement from '../firstRecurringArrayElement';

describe('firstRecurringArrayElement', () => {
  describe('should return', () => {
    assertReturnValue([], null);
    assertReturnValue([1, 2, 3, 1], 1);
    assertReturnValue([1, 2, 3, 1, 4], 1);
    assertReturnValue([1, 2, 3], null);
    assertReturnValue([1], null);
    assertReturnValue(['1', '2', '3', '1'], '1');
    assertReturnValue(['1', '1', '1'], '1');
    assertReturnValue([true, false], null);
    assertReturnValue([true, true], true);
    assertReturnValue([false, false], false);
    assertReturnValue([{}, {}], null);
    {
      const o1 = {};
      const o2 = {};
      const o3 = o1;
      assertReturnValue([o1, o2, o3], o1);
    }
    assertReturnValue([undefined, undefined], undefined);
    assertReturnValue([null, null], null);
  });
});

function assertReturnValue(array: any[], expected: any) {
  test(`${expected} when given ${JSON.stringify(array)}`, () => {
    expect(firstRecurringArrayElement(array)).toBe(expected);
  });
}
