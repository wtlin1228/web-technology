// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(record) {
    this.data = record;
    this.children = [];
  }

  add(record) {
    this.children.push(new Node(record));
  }

  remove(record) {
    this.children = this.children.filter(child => child.data !== record);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const array = [this.root];
    
    while (array.length) {
      const node = array.shift();

      array.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    const array = [this.root];

    while (array.length) {
      const node = array.shift();

      array.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
