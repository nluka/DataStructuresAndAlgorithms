class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

/*
  append: O(1)
  prepend: O(1)
  insert: O(n + 1) because traversal is O(n), and the actual insertion is O(1)
  remove: O(n + 1) because traversal is O(n), and the actual insertion is O(1)
*/

class SinglyLinkedList {
  constructor(values) {
    if (!Array.isArray(values)) {
      throw new Error(`passed in parameter (values) must be an array, but instead is of type '${typeof values}'`);
    }

    this.head = new Node(values[0], null);
    this.tail = this.head;
    this.length = 1;

    for (let i = 1; i < values.length; i++) {
      this.append(values[i]);
    }

    return this;
  }

  append(value) {
    const newNode = new Node(value, null);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;
    return this;
  }

  getValueAtIndex(index) {
    return this.getNodeAtIndex(index).value;
  }

  getValues() {
    const values = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
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
    const newNode = new Node(value, trailingNode.next);
    trailingNode.next = newNode;
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
    const nodeToRemove = trailingNode.next;
    trailingNode.next = nodeToRemove.next;
    this.length--;
    return this;
  }

  getNodeAtIndex(index) {
    let currentNode = this.head;
    for (let currentIndex = 0; currentIndex < index; currentIndex++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  reverse() {
    if (this.length < 2) {
      return this;
    }

    let first = this.head;
    this.tail = this.head;
    let second = this.head.next;
    while (second !== null) {
      const third = second.next;
      second.next = first;
      first = second;
      second = third;
    }
    this.tail.next = null;
    this.head = first;

    return this;
  }
}

module.exports.SinglyLinkedList = SinglyLinkedList;
