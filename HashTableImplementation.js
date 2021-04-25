/*
  _hash: O(1)
  set: usually O(1), but O(n) if collision occurs
  get: usually O(1), but O(n) if collision occurs
*/

module.exports.HashTable = class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (this.data[address] === undefined) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  get(key) {
    const address = this._hash(key);
    for (let i = 0; i < this.data[address].length; i++) {
      if (this.data[address][i][0] === key) {
        return this.data[address][i][1];
      }
    }
  }
};
