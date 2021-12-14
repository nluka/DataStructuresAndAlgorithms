import SinglyLinkedList from "../SinglyLinkedList";
import assertListIsEmpty from "./assertListIsEmpty";

let l: SinglyLinkedList<any>;

describe("SinglyLinkedList.clear", () => {
  test(`should correctly clear an empty list`, () => {
    l = new SinglyLinkedList([1, 2, 3]);
    l.clear();
    assertListIsEmpty(l);
  });

  test(`should correctly clear a populated list`, () => {
    l = new SinglyLinkedList([]);
    l.clear();
    assertListIsEmpty(l);
  });
});
