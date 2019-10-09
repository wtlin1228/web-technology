// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(record) {
    this.data = record;
    this.left = null;
    this.right = null;
  }

  insert(record) {
    
    // Solution 1
    // let node = this;
    
    // while (1) {
    //   if (record > node.data ) {
    //     if (node.right) {
    //       node = node.right;
    //     } else {
    //       node.right = new Node(record);
    //       return;
    //     }
    //   } else {
    //     if (node.left) {
    //       node = node.left;
    //     } else {
    //       node.left = new Node(record);
    //       return;
    //     }
    //   }
    // }

    // Solution 2
    if (record < this.data && this.left) {
      this.left.insert(record);
    } else if (record < this.data) {
      this.left = new Node(record);
    } else if (this.data < record && this.right) {
      this.right.insert(record);
    } else {
      this.right = new Node(record);
    }
  }

  contains(target) {
    if (this.data === target) {
      return this;
    } 
    
    if (this.data > target && this.left) {
      return this.left.contains(target);
    } else if (this.data < target && this.right) {
      return this.right.contains(target);
    } 
      
    return null;
  }
}

module.exports = Node;
