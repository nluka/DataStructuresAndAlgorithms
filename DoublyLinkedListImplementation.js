class Node {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor(firstValue) {
    this.head = {
      value: firstValue,
      next: null,
      previous: null
    };
    this.tail = this.head;
    this.length = 1;
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
    let currentNode;
    const middleIndex = (this.length - 1) / 2;

    if (index <= middleIndex) {
      currentNode = this.head;
      for (let currentIndex = 0; currentIndex < index; currentIndex++) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }

    const lastIndex = this.length - 1;
    currentNode = this.head;
    for (let currentIndex = lastIndex; currentIndex > index; currentIndex--) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

const doublyLinkedList = new DoublyLinkedList(5);
doublyLinkedList.prepend(1);
doublyLinkedList.append(10);
// doublyLinkedList.insert(4, 100);
doublyLinkedList.remove(1);
console.log(doublyLinkedList.getValues());
