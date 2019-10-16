// https://www.hackerrank.com/challenges/maximum-element/problem

class Node {
  constructor(data, max) {
    this.data = data;
    this.max = max;
  }
}

function processData(input) {
  const [_, ...queries] = input.split('\n');

  const stack = [];
  let max = null;

  for (const s of queries) {
    const [query, number] = s.split(' ');
    if (query === '1') {
      max = Math.max(number, max);
      stack.push(new Node(number, max));
    }
    if (query === '2') {
      stack.pop();
      if (!stack.length) max = null;
      else max = stack[stack.length - 1].max;
    }
    if (query === '3') {
      if (stack.length) {
        console.log(max);
      }
    }
  }
}

// Runtime: O(n), lookup: O(1)
// Space: O(n)
