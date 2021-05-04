class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports.QueueLL = class QueueLL {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value, null);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  isEmpty() {
    return this.length === 0;
  }

  dequeue() {
    if (this.isEmpty()) {
      return this;
    }
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      const second = this.first.next;
      this.first = second;
    }
    this.length--;
    return this;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.first.value;
  }
};
