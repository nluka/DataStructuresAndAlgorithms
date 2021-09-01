import SinglyLinkedList, { Node } from '../SinglyLinkedList';

let l: SinglyLinkedList<any>;

afterEach(() => {
  clearList();
});

function clearList() {
  l._head = null;
  l._tail = null;
  l._length = 0;
}

describe('SinglyLinkedList', () => {
  describe('constructor', () => {
    test('no values', () => {
      l = new SinglyLinkedList();
      assertListIsEmpty();
    });

    test('single value', () => {
      const val = 1;
      l = new SinglyLinkedList([val]);
      const node = new Node(val, null);
      expect(l._head).toEqual(node);
      expect(l._tail).toEqual(node);
      expect(l._length).toEqual(1);
    });

    test('multiple values', () => {
      l = new SinglyLinkedList([1, 2, 3]);
      const expectedTail = new Node(3, null);
      const expectedHead = new Node(1, new Node(2, expectedTail));
      expect(l._head).toEqual(expectedHead);
      expect(l._tail).toEqual(expectedTail);
      expect(l._length).toEqual(3);
    });
  });

  describe('append', () => {
    test('onto empty list', () => {
      const val = 1;
      l.append(val);
      const node = new Node(val, null);
      expect(l._head).toEqual(node);
      expect(l._tail).toEqual(node);
      expect(l._length).toBe(1);
    });

    test('onto populated list', () => {
      l = new SinglyLinkedList([1, 2, 3]);
      const val = 4;
      l.append(val);
      const node = new Node(val, null);
      expect(l._tail).toEqual(node);
      expect(l._length).toBe(4);
    });
  });

  describe('append', () => {
    test('onto empty list', () => {
      const val = 1;
      l.prepend(val);
      const node = new Node(val, null);
      expect(l._head).toEqual(node);
      expect(l._tail).toEqual(node);
      expect(l._length).toBe(1);
    });

    test('onto populated list', () => {
      l = new SinglyLinkedList([1, 2, 3]);
      const val = 0.5;
      l.prepend(val);
      const expectedTail = new Node(3, null);
      const expectedHead = new Node(
        val,
        new Node(1, new Node(2, expectedTail))
      );
      expect(l._head).toEqual(expectedHead);
      expect(l._tail).toEqual(expectedTail);
      expect(l._length).toBe(4);
    });
  });

  describe('_getNode', () => {
    describe('should return correct node', () => {
      test('length 0', () => {
        expect(l._getNode(0)).toBeNull();
      });

      test('length 1', () => {
        l = new SinglyLinkedList([1]);
        expect(l._getNode(0)).toEqual(new Node(1, null));
      });

      test('length 2', () => {
        l = new SinglyLinkedList([1, 2]);
        expect(l._getNode(0)).toEqual(new Node(1, new Node(2, null)));
      });

      test('length 3', () => {
        l = new SinglyLinkedList([1, 2, 3]);
        expect(l._getNode(2)).toEqual(new Node(3, null));
      });
    });
  });

  describe('get', () => {
    describe('should', () => {
      describe('throw error when', () => {
        test('index is out of bounds', () => {
          l = new SinglyLinkedList([1, 2, 3]);
          expect(() => l.get(-1)).toThrowError();
          expect(() => l.get(4)).toThrowError();
        });
      });

      describe('return correct value when index is valid', () => {
        test('length 0', () => {
          expect(l.get(0)).toBeNull();
        });

        test('length 1', () => {
          l = new SinglyLinkedList([1]);
          expect(l.get(0)).toBe(1);
        });

        test('length 2', () => {
          l = new SinglyLinkedList([1, 2]);
          expect(l.get(1)).toBe(2);
        });

        test('length 3', () => {
          l = new SinglyLinkedList([1, 2, 3]);
          expect(l.get(1)).toBe(2);
        });
      });
    });
  });

  describe('getAll', () => {
    describe('should return array containing all current values', () => {
      test('empty list', () => {
        expect(l.getAll()).toEqual([]);
      });

      test('populated list', () => {
        const vals = [1, 2, 3];
        l = new SinglyLinkedList(vals);
        expect(l.getAll()).toEqual(vals);
      });
    });
  });

  describe('insert', () => {
    describe('should', () => {
      describe('throw error when', () => {
        test('index < 0', () => {
          expect(() => {
            l.insert(100, -1);
          }).toThrow();
        });

        test('index > length', () => {
          expect(() => {
            l = new SinglyLinkedList([1, 2, 3]);
            l.insert(100, 4);
          }).toThrow();
        });
      });

      describe('succeed', () => {
        test('into empty list', () => {
          const val = 1;
          l.insert(val, 0);
          const node = new Node(val, null);
          expect(l._head).toEqual(node);
          expect(l._tail).toEqual(node);
          expect(l._length).toBe(1);
        });

        describe('into beginning of populated list', () => {
          test('length 1', () => {
            l = new SinglyLinkedList([1]);
            const val = 0.5;
            l.insert(val, 0);
            const expectedTail = new Node(1, null);
            const expectedHead = new Node(val, expectedTail);
            expect(l._head).toEqual(expectedHead);
            expect(l._tail).toEqual(expectedTail);
            expect(l._length).toBe(2);
          });

          test('length 2', () => {
            l = new SinglyLinkedList([1, 2]);
            const val = 0.5;
            l.insert(val, 0);
            const expectedTail = new Node(2, null);
            const expectedHead = new Node(val, new Node(1, expectedTail));
            expect(l._head).toEqual(expectedHead);
            expect(l._tail).toEqual(expectedTail);
            expect(l._length).toBe(3);
          });

          test('length 3', () => {
            l = new SinglyLinkedList([1, 2, 3]);
            const val = 0.5;
            l.insert(val, 0);
            const expectedTail = new Node(3, null);
            const expectedHead = new Node(
              val,
              new Node(1, new Node(2, expectedTail))
            );
            expect(l._head).toEqual(expectedHead);
            expect(l._tail).toEqual(expectedTail);
            expect(l._length).toBe(4);
          });
        });

        describe('into middle of populated list', () => {
          test('length 2', () => {
            l = new SinglyLinkedList([1, 2]);
            const val = 1.5;
            l.insert(val, 1);
            const expectedTail = new Node(2, null);
            const expectedHead = new Node(1, new Node(val, expectedTail));
            expect(l._head).toEqual(expectedHead);
            expect(l._tail).toEqual(expectedTail);
            expect(l._length).toBe(3);
          });

          test('length 3', () => {
            l = new SinglyLinkedList([1, 2, 3]);
            const val = 1.5;
            l.insert(val, 1);
            const expectedTail = new Node(3, null);
            const expectedHead = new Node(
              1,
              new Node(val, new Node(2, expectedTail))
            );
            expect(l._head).toEqual(expectedHead);
            expect(l._tail).toEqual(expectedTail);
            expect(l._length).toBe(4);
          });
        });

        describe('onto end of populated list', () => {
          test('length 2', () => {
            l = new SinglyLinkedList([1, 2]);
            const val = 3;
            l.insert(val, 2);
            const expectedTail = new Node(val, null);
            const expectedHead = new Node(1, new Node(2, expectedTail));
            expect(l._head).toEqual(expectedHead);
            expect(l._tail).toEqual(expectedTail);
            expect(l._length).toBe(3);
          });

          test('length 3', () => {
            l = new SinglyLinkedList([1, 2, 3]);
            const val = 4;
            l.insert(val, 3);
            const expectedTail = new Node(val, null);
            const expectedHead = new Node(
              1,
              new Node(2, new Node(3, expectedTail))
            );
            expect(l._head).toEqual(expectedHead);
            expect(l._tail).toEqual(expectedTail);
            expect(l._length).toBe(4);
          });
        });
      });
    });
  });

  describe('remove', () => {
    describe('should', () => {
      describe('throw error given', () => {
        test('index 0 of empty list', () => {
          expect(() => {
            l.remove(0);
          }).toThrow();
        });
      });

      describe('succeed given', () => {
        test('index 0 of populated list, length 1', () => {
          l = new SinglyLinkedList([1]);
          expect(l.remove(0)).toBe(1);
          assertListIsEmpty();
        });

        test('index 0 of populated list, length 2', () => {
          l = new SinglyLinkedList([1, 2]);
          expect(l.remove(0)).toBe(1);
          const node = new Node(2, null);
          expect(l._head).toEqual(node);
          expect(l._tail).toEqual(node);
          expect(l._length).toBe(1);
        });

        test('index 1 of populated list, length 2', () => {
          l = new SinglyLinkedList([1, 2]);
          expect(l.remove(1)).toBe(2);
          const node = new Node(1, null);
          expect(l._head).toEqual(node);
          expect(l._tail).toEqual(node);
          expect(l._length).toBe(1);
        });

        test('index 1 of populated list, length 3', () => {
          l = new SinglyLinkedList([1, 2, 3]);
          expect(l.remove(1)).toBe(2);
          const expectedTail = new Node(3, null);
          const expectedHead = new Node(1, expectedTail);
          expect(l._head).toEqual(expectedHead);
          expect(l._tail).toEqual(expectedTail);
          expect(l._length).toBe(2);
        });

        test('index 2 of populated list, length 3', () => {
          l = new SinglyLinkedList([1, 2, 3]);
          expect(l.remove(2)).toBe(3);
          const expectedTail = new Node(2, null);
          const expectedHead = new Node(1, expectedTail);
          expect(l._head).toEqual(expectedHead);
          expect(l._tail).toEqual(expectedTail);
          expect(l._length).toBe(2);
        });
      });
    });
  });

  describe('reverse', () => {
    test('length 0', () => {
      l.reverse();
      assertListIsEmpty();
    });

    test('length 1', () => {
      l = new SinglyLinkedList([1]);
      l.reverse();
      const node = new Node(1, null);
      expect(l._head).toEqual(node);
      expect(l._tail).toEqual(node);
      expect(l._length).toBe(1);
    });

    test('length 2', () => {
      l = new SinglyLinkedList([1, 2]);
      l.reverse();
      const expectedTail = new Node(1, null);
      const expectedHead = new Node(2, expectedTail);
      expect(l._head).toEqual(expectedHead);
      expect(l._tail).toEqual(expectedTail);
      expect(l._length).toBe(2);
    });

    test('length 3', () => {
      l = new SinglyLinkedList([1, 2, 3]);
      l.reverse();
      const expectedTail = new Node(1, null);
      const expectedHead = new Node(3, new Node(2, expectedTail));
      expect(l._head).toEqual(expectedHead);
      expect(l._tail).toEqual(expectedTail);
      expect(l._length).toBe(3);
    });
  });
});

function assertListIsEmpty() {
  expect(l._head).toBeNull();
  expect(l._tail).toBeNull();
  expect(l._length).toBe(0);
}
