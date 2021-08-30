import { afterEach, describe, expect } from '@jest/globals';
import Stack from '../Stack';

let s: Stack<any>;

afterEach(() => {
  clearStack();
});

function clearStack() {
  s._top = null;
  s._bottom = null;
  s._values = [];
}

describe('StackArr', () => {
  describe('constructor', () => {
    test('no values', () => {
      s = new Stack();
      expect(s._values).toEqual([]);
      expect(s._top).toBeNull();
      expect(s._bottom).toBeNull();
    });

    test('single value', () => {
      s = new Stack([1]);
      expect(s._values).toEqual([1]);
      expect(s._top).toBe(1);
      expect(s._bottom).toBe(1);
    });

    test('multiple values', () => {
      s = new Stack([1, 2, 3]);
      expect(s._values).toEqual([1, 2, 3]);
      expect(s._top).toBe(3);
      expect(s._bottom).toBe(1);
    });
  });

  describe('isEmpty', () => {
    describe('returns', () => {
      test('true when empty', () => {
        expect(s.isEmpty()).toBe(true);
      });

      test('false when not empty', () => {
        const val = 1;

        // Simulate push
        s._values = [val];
        s._top = val;
        s._bottom = val;

        expect(s.isEmpty()).toBe(false);
      });
    });
  });

  describe('push', () => {
    test('onto empty stack', () => {
      const val = 'str';
      s = new Stack();
      s.push(val);
      expect(s._values).toEqual([val]);
      expect(s._top).toBe(val);
      expect(s._bottom).toBe(val);
    });

    test('onto non-empty stack', () => {
      s = new Stack([1]);
      s.push(2);
      expect(s._values).toEqual([1, 2]);
      expect(s._top).toBe(2);
      expect(s._bottom).toBe(1);
    });
  });

  describe('peekTop', () => {
    test('of empty stack', () => {
      s = new Stack();
      expect(s.peekTop()).toBeNull();
    });

    test('of non-empty stack', () => {
      s = new Stack([1, 2, 3]);
      expect(s.peekTop()).toBe(3);
    });
  });

  describe('peekBottom', () => {
    test('of empty stack', () => {
      s = new Stack();
      expect(s.peekBottom()).toBeNull();
    });

    test('of non-empty stack', () => {
      s = new Stack([1, 2, 3]);
      expect(s.peekBottom()).toBe(1);
    });
  });

  describe('pop', () => {
    test('empty stack', () => {
      expect(s.pop()).toBeNull();
      verifyStackIsEmpty();
    });

    describe('stack containing', () => {
      test('1 item', () => {
        s = new Stack([1]);
        expect(s.pop()).toBe(1);
        verifyStackIsEmpty();
      });

      test('2 items', () => {
        s = new Stack([1, 2]);
        expect(s.pop()).toBe(2);
        expect(s._top).toBe(1);
        expect(s._bottom).toBe(1);
        expect(s._values).toEqual([1]);
      });

      test('3 items', () => {
        s = new Stack([1, 2, 3]);
        expect(s.pop()).toBe(3);
        expect(s._top).toBe(2);
        expect(s._bottom).toBe(1);
        expect(s._values).toEqual([1, 2]);
      });

      test('4 items', () => {
        s = new Stack([1, 2, 3, 4]);
        expect(s.pop()).toBe(4);
        expect(s._top).toBe(3);
        expect(s._bottom).toBe(1);
        expect(s._values).toEqual([1, 2, 3]);
      });
    });
  });

  describe('clear', () => {
    test('empty stack', () => {
      expect(s.clear()).toEqual([]);
      verifyStackIsEmpty();
    });

    test('non-empty stack', () => {
      s = new Stack([1, 2, 3]);
      expect(s.clear()).toEqual([3, 2, 1]);
      verifyStackIsEmpty();
    });
  });

  describe('clearFast', () => {
    test('empty stack', () => {
      s.clearFast();
      verifyStackIsEmpty();
    });

    test('non-empty stack', () => {
      s = new Stack([1, 2, 3]);
      s.clear();
      verifyStackIsEmpty();
    });
  });
});

function verifyStackIsEmpty() {
  expect(s._top).toBeNull();
  expect(s._bottom).toBeNull();
  expect(s._values).toEqual([]);
}
