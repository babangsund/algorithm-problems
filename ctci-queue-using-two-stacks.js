// https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem

// In this challenge, you must first implement a queue using two stacks. Then process  queries, where each query is one of the following  types:
//
// 1 x: Enqueue element  into the end of the queue.
// 2: Dequeue the element at the front of the queue.
// 3: Print the element at the front of the queue.
//
// The first line contains a single integer, , the number of queries.
// Each of the next q lines contains a single query in the form described in the problem statement above.
// All queries start with an integer denoting the query type,
// but only query 1 is followed by an additional space-separated value, x, denoting the value to be enqueued.
//
// Given string input =
// 10
// 1 42
// 2
// 1 14
// 3
// 1 28
// 3
// 1 60
// 1 78
// 2
// 2
//
// Output:
// 14
// 14

class Stack {
  constructor(stack = []) {
    this._stack = stack;
  }

  push(data) {
    this._stack.push(data);
  }

  pop() {
    return this._stack.pop();
  }

  peek() {
    return this._stack[this._stack.length - 1];
  }
}

class Queue {
  constructor() {
    this.tail = null;
    this.active = new Stack();
    this.placeholder = new Stack();
  }

  enqueue(data) {
    this.active.push(data);
    if (!this.tail) this.tail = data;
  }

  dequeue() {
    // if anything in dequeue stack, return pop
    if (this.placeholder.peek() !== undefined) {
      const data = this.placeholder.pop();

      // if dequeue stack is now empty, populate
      this._maybePopulate();

      this.tail = this.placeholder.peek();
      return data;
    }

    // otherwise, populate dequeue stack, and pop the top.
    this._maybePopulate();

    const data = this.placeholder.pop();
    const tail = this.placeholder.peek();

    this.tail = tail;
    return data;
  }

  peek() {
    return this.tail;
  }

  _maybePopulate() {
    if (this.placeholder.peek() === undefined) {
      while (this.active.peek() !== undefined) {
        this.placeholder.push(this.active.pop());
      }
    }
  }
}

function processData(input) {
  const queue = new Queue();
  const inputArr = input.split('\n');

  for (let i = 1; i < inputArr.length; i++) {
    const action = inputArr[i][0];
    switch (action) {
      case '1':
        const data = inputArr[i].slice(1).trim();
        queue.enqueue(data);
        break;
      case '2':
        queue.dequeue();
        break;
      case '3':
        console.log(queue.peek());
        break;
    }
  }
}
