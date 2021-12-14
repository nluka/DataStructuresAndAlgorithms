import SinglyLinkedList from "../SinglyLinkedList";

export default function assertListIsEmpty(l: SinglyLinkedList<any>) {
  expect(l.headNode()).toBeNull();
  expect(l.tailNode()).toBeNull();
  expect(l.length()).toBe(0);
}
