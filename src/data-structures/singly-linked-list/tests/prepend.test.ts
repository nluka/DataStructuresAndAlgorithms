import SinglyLinkedList, { NodeUnilateral } from "../SinglyLinkedList";
import clearList from "./clearList";

let l: SinglyLinkedList<any>;

beforeAll(() => (l = new SinglyLinkedList()));

afterEach(() => clearList(l));

describe("SinglyLinkedList.prepend", () => {
  function assertSuccess(
    listValues: any[],
    prependValue: any,
    expectedHead: any,
    expectedTail: any
  ) {
    test(`should succeed when prependValue=${prependValue}, listValues=${JSON.stringify(
      listValues
    )}`, () => {
      l = new SinglyLinkedList(listValues);
      const prevLength = l._length;
      l.prepend(prependValue);
      expect(l._head).toEqual(expectedHead);
      expect(l._tail).toEqual(expectedTail);
      expect(l._length).toBe(prevLength + 1);
    });
  }

  {
    const val = 1;
    const node = new NodeUnilateral(val, null);
    assertSuccess([], val, node, node);
  }

  {
    const val = 0.5;
    const expectedTail = new NodeUnilateral(3, null);
    const expectedHead = new NodeUnilateral(
      val,
      new NodeUnilateral(1, new NodeUnilateral(2, expectedTail))
    );
    assertSuccess([1, 2, 3], val, expectedHead, expectedTail);
  }

  {
    const val = null;
    const expectedTail = new NodeUnilateral(undefined, null);
    const expectedHead = new NodeUnilateral(
      val,
      new NodeUnilateral(undefined, expectedTail)
    );
    assertSuccess([undefined, undefined], val, expectedHead, expectedTail);
  }
});
