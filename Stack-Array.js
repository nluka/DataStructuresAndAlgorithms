class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports.StackArr = class StackArr {
  constructor() {
    this.values = [];
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(value) {
    this.values.push(value);
    if (this.isEmpty()) {
      this.bottom = value;
    }
    this.top = value;
    this.length++;
    return this;
  }

  pop() {
    if (this.isEmpty()) {
      return this;
    }
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.values[this.length - 2];
    }
    this.values.pop();
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
    return this.values[index];
  }
};
