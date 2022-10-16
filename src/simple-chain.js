const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

 const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === null) {
      value = 'null'}
      else if (typeof value === 'undefined') {
      value = ' ';
    } 
    this.chain.push(`( ${value.toString()} )`);
    return this;
  },

  removeLink(position) {

    if (position <= 0 || !Number.isInteger(position) || position > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
     }

    this.chain.splice(position - 1, 1);
    return this

  },

  reverseChain() {
    this.chain.reverse();
    return this
  },

  finishChain() {
    let string = '';
    
    if (this.chain.length > 0) {
      string = this.chain.join('~~')
    }
    this.chain = [];

    return string
  }
};

module.exports = {
  chainMaker
};
