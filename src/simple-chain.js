const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  storage: [],
  getLength() {
    return this.storage.length;
  },
  addLink(value) {
    this.storage.push(`( ${value} )~~`);

    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || this.storage.length < position) {
      this.storage.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.storage.splice((position-1), 1);
    return this;
  },
  reverseChain() {
    this.storage.reverse();
    return this;
  },
  finishChain() {
    let storage = [];

    for (let i = 0; i < this.storage.length; i++) {
      if (i === this.storage.length - 1) {
        storage.push(this.storage[i].slice(0, -2))
      } else {
        storage.push(this.storage[i]);
      }
    }

    this.storage = storage;
    let mas = storage.slice(0).join('');
    this.storage.length = 0;

    return mas;

  }
};


module.exports = {
  chainMaker
};
