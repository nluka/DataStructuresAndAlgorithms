class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports.StackLL = class StackLL {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {}

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
    let currentNode = this.bottom;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
};
