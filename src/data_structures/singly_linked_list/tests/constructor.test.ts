import SinglyLinkedList, { NodeUnilateral } from "../SinglyLinkedList";
import assertListIsEmpty from "./assertListIsEmpty";

let l: SinglyLinkedList<any>;

afterEach(() => l.clear());

describe("SinglyLinkedList.constructor", () => {
  describe("constructor", () => {
    test("no values", () => {
      l = new SinglyLinkedList();
      assertListIsEmpty(l);
    });

    test("single value", () => {
      const val = 1;
      l = new SinglyLinkedList([val]);
      const expectedHeadAndTailNode = new NodeUnilateral(val, null);
      expect(l.headNode()).toEqual(expectedHeadAndTailNode);
      expect(l.tailNode()).toEqual(expectedHeadAndTailNode);
      expect(l.length()).toEqual(1);
    });

    test("multiple values", () => {
      l = new SinglyLinkedList([1, 2, 3]);
      const expectedTail = new NodeUnilateral(3, null);
      const expectedHead = new NodeUnilateral(
        1,
        new NodeUnilateral(2, expectedTail)
      );
      expect(l.headNode()).toEqual(expectedHead);
      expect(l.tailNode()).toEqual(expectedTail);
      expect(l.length()).toEqual(3);
    });
  });
});
