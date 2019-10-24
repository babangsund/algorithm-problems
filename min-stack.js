// https://leetcode.com/problems/min-stack/

class MinNode {
  constructor(min, data) {
    this.min = min;
    this.data = data;
  }
}

class MinStack {
  constructor() {
    this.stack = [];
    this.min = null;
  }

  // Runtime: O(1)
  push(x) {
    const min = this.min === null ? x : Math.min(this.min, x);
    const node = new MinNode(min, x);
    this.stack.push(node);
    this.min = min;
  }

  // Runtime: O(1)
  pop() {
    const node = this.stack.pop();
    if (!this.stack.length) this.min = null;
    else this.min = this.stack[this.stack.length - 1].min;
    return node && node.data;
  }

  // Runtime: O(1)
  top() {
    const node = this.stack[this.stack.length - 1];
    return node && node.data;
  }

  // Runtime: O(1)
  getMin() {
    return this.min;
  }
}
