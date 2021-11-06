import SinglyLinkedList, { NodeUnilateral } from "../SinglyLinkedList";
import assertListIsEmpty from "./assertListIsEmpty";
import clearList from "./clearList";

let l: SinglyLinkedList<any>;

afterEach(() => clearList(l));

describe("SinglyLinkedList.constructor", () => {
  describe("constructor", () => {
    test("no values", () => {
      l = new SinglyLinkedList();
      assertListIsEmpty(l);
    });

    test("single value", () => {
      const val = 1;
      l = new SinglyLinkedList([val]);
      const node = new NodeUnilateral(val, null);
      expect(l._head).toEqual(node);
      expect(l._tail).toEqual(node);
      expect(l._length).toEqual(1);
    });

    test("multiple values", () => {
      l = new SinglyLinkedList([1, 2, 3]);
      const expectedTail = new NodeUnilateral(3, null);
      const expectedHead = new NodeUnilateral(
        1,
        new NodeUnilateral(2, expectedTail)
      );
      expect(l._head).toEqual(expectedHead);
      expect(l._tail).toEqual(expectedTail);
      expect(l._length).toEqual(3);
    });
  });
});
