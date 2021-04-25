class Node {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

/*
  append: O(1)
  prepend: O(1)
  insert: O(n/2 + 1) because traversal is O(n/2), and the actual insertion is O(1)
  remove: O(n/2 + 1) because traversal is O(n/2), and the actual insertion is O(1)
*/

module.exports.DoublyLinkedList = class DoublyLinkedList {
  constructor(values) {
    if (!Array.isArray(values)) {
      throw new Error(`passed in parameter (values) must be an array, but instead is of type '${typeof values}'`);
    }

    this.head = new Node(values[0], null, null);
    this.tail = this.head;
    this.length = 1;

    for (let i = 1; i < values.length; i++) {
      this.append(values[i]);
    }

    return this;
  }

  append(value) {
    const newNode = new Node(value, null, this.tail);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value, this.head, null);
    this.head = newNode;
    this.length++;
    return this;
  }

  getValueAtIndex(index) {
    return this.getNodeAtIndex(index).value;
  }

  getValues() {
    const values = [];
    let nodeAtIndex = this.head;
    while (nodeAtIndex !== null) {
      values.push(nodeAtIndex.value);
      nodeAtIndex = nodeAtIndex.next;
    }
    return values;
  }

  insert(index, value) {
    if (index < 0) {
      throw new Error(`cannot insert at index less than 0 (${index} was passed for index)`);
    }
    if (index === 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }

    const trailingNode = this.getNodeAtIndex(index - 1);
    const nodeAtIndex = this.getNodeAtIndex(index);
    const newNode = new Node(value, trailingNode.next, trailingNode);
    trailingNode.next = newNode;
    nodeAtIndex.previous = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0) {
      throw new Error(`cannot remove element at index less than 0 (${index} was passed for index)`);
    }
    if (index === 0) {
      this.head = this.getNodeAtIndex(index + 1);
      return this;
    }

    if (index >= this.length) {
      index = this.length - 1;
    }
    const trailingNode = this.getNodeAtIndex(index - 1);
    const nodeAtIndex = trailingNode.next;
    const leadingNode = nodeAtIndex.next;
    trailingNode.next = leadingNode;
    if (index < this.length - 1) {
      leadingNode.previous = trailingNode;
    }
    this.length--;
    return this;
  }

  getNodeAtIndex(index) {
    let nodeAtIndex;
    const middleIndex = (this.length - 1) / 2;

    if (index <= middleIndex) {
      nodeAtIndex = this.head;
      for (let currentIndex = 0; currentIndex < index; currentIndex++) {
        nodeAtIndex = nodeAtIndex.next;
      }
      return nodeAtIndex;
    }

    const lastIndex = this.length - 1;
    nodeAtIndex = this.tail;
    for (let currentIndex = lastIndex; currentIndex > index; currentIndex--) {
      nodeAtIndex = nodeAtIndex.next;
    }
    return nodeAtIndex;
  }

  reverse() {
    if (this.length < 2) {
      return this;
    }

    this.tail = this.head;
    let first = this.head;
    let second = this.head.next;
    while (second !== null) {
      const third = second.next;
      second.previous = third;
      second.next = first;
      first = second;
      second = third;
    }
    this.tail.previous = this.head.next;
    this.tail.next = null;
    this.head = first;

    return this;
  }
};
