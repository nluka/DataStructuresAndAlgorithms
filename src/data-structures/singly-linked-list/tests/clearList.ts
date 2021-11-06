import SinglyLinkedList from "../SinglyLinkedList";

export default function clearList(l: SinglyLinkedList<any>) {
  l._head = null;
  l._tail = null;
  l._length = 0;
}
