import SinglyLinkedList, {
  NodeUnilateral,
} from '../singly-linked-list/SinglyLinkedList';

type List<T> = SinglyLinkedList<T>;

export function listInit<T>(list: List<T>, values: T[]) {
  values.forEach((v) => {
    list.append(v);
  });
}

export function listAppend<T>(list: List<T>, node: NodeUnilateral<T>) {
  if (list._length === 0) {
    list._head = node;
  }
  if (list._tail !== null) {
    list._tail.next = node;
  }
  list._tail = node;
  ++list._length;
}

export function listPrepend<T>(list: List<T>, node: NodeUnilateral<T>) {
  list._head = node;
  if (list._length === 0) {
    list._tail = node;
  }
  ++list._length;
}

export function listGet<T>(list: List<T>, index: number) {
  if (index < 0 || (list._length > 0 && index > list._length - 1)) {
    throw new RangeError(`index ${index} is not in bounds`);
  }

  const node = list._getNode(index);
  return node !== null ? node.value : null;
}

export function listTraverseFromHead<T>(list: List<T>, index: number) {
  let currentNode = list._head;
  for (let i = 0; i < index; ++i) {
    if (currentNode !== null) {
      currentNode = currentNode.next;
    } else {
      throwTraversalError();
    }
  }
  return currentNode;
}

export function throwTraversalError() {
  throw new Error(
    "couldn't traverse list because a node along path to destination index was null"
  );
}
