// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(record) {
    this.head = new Node(record, this.head);
  }

  insertLast(record) {
    if (!this.head) {
      this.head = new Node(record);
      return;
    }

    this.getLast().next = new Node(record);
  }

  insertAt(record, index) {
    if (!this.head) {
      this.head = new Node(record);
      return;
    }

    if (index === 0) {
      this.insertFirst(record);
      return;
    }

    if (index > this.size() - 1) {
      this.insertLast(record);
      return;
    }

    const previous = this.getAt(index - 1);
    previous.next = new Node(record, previous.next);
  }

  size() {  
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    while (node.next) {
      node = node.next;
    }

    return node;
  }

  getAt(index) {
    if (!this.head) return null;

    let node = this.head;

    for(let i = 0; i < index; i++) {
      if (node.next) {
        node = node.next;
      } else {
        return null;
      }
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    
    let previous;
    let node = this.head;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  removeAt(index) {
    if (!this.head) return;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    const next = this.getAt(index + 1);

    if (previous) {
      previous.next = next;
    }
  }

  forEach(fn) {
    let node = this.head;
    let count = 0;

    while(node) {
      fn(node, count);
      node = node.next;
      count++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while(node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
