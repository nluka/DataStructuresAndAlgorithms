const { describe, test, expect } = require('@jest/globals');
const { firstRecurringArrayElement } = require('../firstRecurringArrayElement');

describe('firstRecurringArrayElement', () => {
  describe('should throw TypeError when given', () => {
    assertTypeErrorThrown(1);
    assertTypeErrorThrown(true);
    assertTypeErrorThrown('str');
    assertTypeErrorThrown({});
    assertTypeErrorThrown(null);
    assertTypeErrorThrown(undefined);
  });
});

function assertTypeErrorThrown(array) {
  test(`${JSON.stringify(array)}`, () => {
    expect(() => firstRecurringArrayElement(array)).toThrowError();
  });
}
