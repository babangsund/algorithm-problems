// https://www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail/problem

function getNode(head, positionFromTail) {
  const nodes = [];
  let next = head;

  while (next) {
    nodes.push(next);
    next = next.next;
  }

  return nodes[nodes.length - positionFromTail - 1].data;
}

// Runtime: O(n)
// Space: O(n)
