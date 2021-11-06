import SinglyLinkedList, { NodeUnilateral } from "../SinglyLinkedList";
import clearList from "./clearList";

let l: SinglyLinkedList<any>;

beforeAll(() => (l = new SinglyLinkedList()));

afterEach(() => clearList(l));

describe("SinglyLinkedList.remove", () => {
  //#region error cases
  function assertThrowsError(listValues: any[], index: number) {
    test(`should throw RangeError when index=${index}, listValues=${JSON.stringify(
      listValues
    )}`, () => {
      l = new SinglyLinkedList(listValues);
      expect(() => {
        l.remove(index);
      }).toThrowError();
    });
  }

  assertThrowsError([], -1);
  assertThrowsError([], 0);
  assertThrowsError([], 1);
  assertThrowsError([], 100);
  //#endregion

  //#region success cases
  function assertSuccess(
    listValues: any[],
    removeIndex: number,
    // expectedReturnValue: any,
    expectedHead: any,
    expectedTail: any
  ) {
    test(`should succeed when index=${removeIndex}, listValues=${JSON.stringify(
      listValues
    )}`, () => {
      l = new SinglyLinkedList(listValues);
      const prevLength = l._length;

      expect(l.remove(removeIndex)).toEqual(listValues[removeIndex]);
      expect(l._head).toEqual(expectedHead);
      expect(l._tail).toEqual(expectedTail);
      expect(l._length).toBe(prevLength - 1);
    });
  }

  assertSuccess([1], 0, null, null);
  {
    const node = new NodeUnilateral(2, null);
    assertSuccess([1, 2], 0, node, node);
  }
  {
    const node = new NodeUnilateral(1, null);
    assertSuccess([1, 2], 1, node, node);
  }
  {
    const expectedTail = new NodeUnilateral(3, null);
    const expectedHead = new NodeUnilateral(1, expectedTail);
    assertSuccess([1, 2, 3], 1, expectedHead, expectedTail);
  }
  {
    const expectedTail = new NodeUnilateral(2, null);
    const expectedHead = new NodeUnilateral(1, expectedTail);
    assertSuccess([1, 2, 3], 2, expectedHead, expectedTail);
  }
  //#endregion
});
