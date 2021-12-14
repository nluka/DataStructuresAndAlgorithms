import SinglyLinkedList from "../singly_linked_list/SinglyLinkedList";

type List<T> = SinglyLinkedList<T>;

export function listInit<T>(list: List<T>, values: T[]) {
  values.forEach((v) => {
    list.append(v);
  });
}

export function listGet<T>(list: List<T>, index: number) {
  const length = list.length();
  if (index < 0 || (length > 0 && index >= length)) {
    throw new RangeError(`index ${index} is not in bounds`);
  }

  const node = list._getNode(index);
  return node?.value || null;
}

export function listThrowTraversalError() {
  throw new Error(
    "list traversal failed because a node along path to destination index was null"
  );
}
