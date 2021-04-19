class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor(firstValue) {
    this.head = {
      value: firstValue,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
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

    const priorNode = this.getNodeAtIndex(index - 1);
    const newNode = new Node(value, priorNode.next);
    priorNode.next = newNode;
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
    const priorNode = this.getNodeAtIndex(index - 1);
    const nodeToRemove = priorNode.next;
    priorNode.next = nodeToRemove.next;
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
}

module.exports.SinglyLinkedList = SinglyLinkedList;

const singlyLinkedList = new SinglyLinkedList(5);
singlyLinkedList.prepend(1);
singlyLinkedList.append(10);
// singlyLinkedList.insert(4, 100);
singlyLinkedList.remove(1);
console.log(singlyLinkedList.getValues());
