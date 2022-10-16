const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

 const chainMaker = {
  chain: [],

  getLength() {
    console.log(this.chain.length)
    return this.chain.length;
  },
  addLink(value) {
    if (!value) {
      this.chain.push('')
    } else {
      value = `( ${value} )`
      this.chain.push(value);
    }
    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position) || !position || position < 0 || this.chain.length < position) {
      throw new Error(`'You can't remove incorrect link!'`)
    } else {
      if (position === 0) {
        throw new Error(`'You can't remove incorrect link!'`)
      } else {this.chain.splice(position - 1, 1);
        return this}

    }
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
    // for (let i = 0; i < this.chain.length; i++) {
    //   this.chain[i] = `( ${this.chain[i]} )`
    // };
    this.chain = this.chain.join('~~')
    console.log(this.chain);
    return this.chain
  }
};

module.exports = {
  chainMaker
};
