const { describe, test, expect } = require('@jest/globals');
const arrayFirstRepeatingElement = require('../arrayFirstRepeatingElement');

describe('arrayFirstRepeatingElement', () => {
  describe('should throw Error when given', () => {
    function assertThrowsError(array) {
      test(`${JSON.stringify(array)}`, () => {
        expect(() => arrayFirstRepeatingElement(array)).toThrowError();
      });
    }

    assertThrowsError(1);
    assertThrowsError(true);
    assertThrowsError('str');
    assertThrowsError({});
    assertThrowsError(null);
    assertThrowsError(undefined);
  });
});
