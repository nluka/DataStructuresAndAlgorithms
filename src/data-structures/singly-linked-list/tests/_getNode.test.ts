import SinglyLinkedList, { NodeUnilateral } from "../SinglyLinkedList";
import clearList from "./clearList";

let l: SinglyLinkedList<any>;

afterEach(() => clearList(l));

describe("SinglyLinkedList._getNode", () => {
  function assert(listValues: any[] | undefined, index: number, expected: any) {
    test(`should return correct node when index=${index}`, () => {
      l = new SinglyLinkedList(listValues);
      expect(l._getNode(index)).toEqual(expected);
    });
  }

  assert([], 0, null);
  assert([1], 0, new NodeUnilateral(1, null));
  assert([1, 2], 0, new NodeUnilateral(1, new NodeUnilateral(2, null)));
  assert([1, 2, 3], 2, new NodeUnilateral(3, null));
});
