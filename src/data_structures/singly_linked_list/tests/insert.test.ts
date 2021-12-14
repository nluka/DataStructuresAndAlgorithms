import SinglyLinkedList, { NodeUnilateral } from "../SinglyLinkedList";

let l: SinglyLinkedList<any>;

beforeAll(() => (l = new SinglyLinkedList()));

afterEach(() => l.clear());

describe("SinglyLinkedList.insert", () => {
  //#region error cases
  function assertThrowsRangeError(
    listValues: any[],
    insertValue: number,
    index: number
  ) {
    test(`should throw RangeError when index (${index}) is out of bounds`, () => {
      l = new SinglyLinkedList(listValues);
      expect(() => {
        l.insert(insertValue, index);
      }).toThrowError(RangeError);
    });
  }

  assertThrowsRangeError([], 100, -1);
  assertThrowsRangeError([], 100, 1);
  assertThrowsRangeError([1, 2, 3], 100, -1);
  assertThrowsRangeError([1, 2, 3], 100, 4);
  //#endregion

  //#region success cases
  function assertSuccess(
    listValues: any[],
    insertValue: any,
    insertIndex: number,
    expectedHeadNode: NodeUnilateral<any>,
    expectedTailNode: NodeUnilateral<any>
  ) {
    test(`should correctly insert value (${insertValue}) at index (${insertIndex}) when listValues=${JSON.stringify(
      listValues
    )}`, () => {
      l = new SinglyLinkedList(listValues);
      const prevLength = l.length();

      l.insert(insertValue, insertIndex);

      expect(l.headNode()).toEqual(expectedHeadNode);
      expect(l.tailNode()).toEqual(expectedTailNode);
      expect(l.length()).toBe(prevLength + 1);
    });
  }

  {
    const val = 1;
    const node = new NodeUnilateral(val, null);
    assertSuccess([], val, 0, node, node);
  }

  {
    const val = 0.5;
    const expectedTail = new NodeUnilateral(1, null);
    const expectedHead = new NodeUnilateral(val, expectedTail);
    assertSuccess([1], val, 0, expectedHead, expectedTail);
  }

  {
    const val = 0.5;
    const expectedTail = new NodeUnilateral(2, null);
    const expectedHead = new NodeUnilateral(
      val,
      new NodeUnilateral(1, expectedTail)
    );
    assertSuccess([1, 2], val, 0, expectedHead, expectedTail);
  }

  {
    const val = 0.5;
    const expectedTail = new NodeUnilateral(3, null);
    const expectedHead = new NodeUnilateral(
      val,
      new NodeUnilateral(1, new NodeUnilateral(2, expectedTail))
    );
    assertSuccess([1, 2, 3], val, 0, expectedHead, expectedTail);
  }

  {
    const val = 1.5;
    const expectedTail = new NodeUnilateral(2, null);
    const expectedHead = new NodeUnilateral(
      1,
      new NodeUnilateral(val, expectedTail)
    );
    assertSuccess([1, 2], val, 1, expectedHead, expectedTail);
  }

  {
    const val = 1.5;
    const expectedTail = new NodeUnilateral(3, null);
    const expectedHead = new NodeUnilateral(
      1,
      new NodeUnilateral(val, new NodeUnilateral(2, expectedTail))
    );
    assertSuccess([1, 2, 3], val, 1, expectedHead, expectedTail);
  }

  {
    const val = 3;
    const expectedTail = new NodeUnilateral(val, null);
    const expectedHead = new NodeUnilateral(
      1,
      new NodeUnilateral(2, expectedTail)
    );
    assertSuccess([1, 2], val, 2, expectedHead, expectedTail);
  }

  {
    const val = 4;
    const expectedTail = new NodeUnilateral(val, null);
    const expectedHead = new NodeUnilateral(
      1,
      new NodeUnilateral(2, new NodeUnilateral(3, expectedTail))
    );
    assertSuccess([1, 2, 3], val, 3, expectedHead, expectedTail);
  }
  //#endregion
});
