class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

/*
  peek: O(1)
  push: O(1)
  pop: O(1)
  getNodeAtIndex: O(n) because of linked list traversal
*/

module.exports.StackLL = class StackLL {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.value;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(value) {
    const newNode = new Node(value, null);
    this.length++;
    const wasTheStackEmptyBeforeThisItemWasAdded = this.length === 1;
    if (wasTheStackEmptyBeforeThisItemWasAdded) {
      this.top = newNode;
      this.bottom = newNode;
      return this;
    }
    this.top.next = newNode;
    this.top = newNode;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return this;
    }
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
      this.length = 0;
      return this;
    }
    const secondLastNode = this.getNodeAtIndex(this.length - 2);
    secondLastNode.next = null;
    this.top = secondLastNode;
    this.length--;
    return this;
  }

  getNodeAtIndex(index) {
    if (index < 0) {
      throw new Error(`cannot get node at index less than 0 (passed in index was ${index})`);
    }
    if (index >= this.length) {
      throw new Error(`cannot get node at index greater than length-1 (passed in index was ${index})`);
    }
    let currentNode = this.bottom;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
};