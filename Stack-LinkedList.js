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
  }

  pop() {}
};
