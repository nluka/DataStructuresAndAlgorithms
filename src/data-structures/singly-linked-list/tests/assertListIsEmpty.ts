import SinglyLinkedList from "../SinglyLinkedList";

export default function assertListIsEmpty(l: SinglyLinkedList<any>) {
  expect(l._head).toBeNull();
  expect(l._tail).toBeNull();
  expect(l._length).toBe(0);
}
