// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem

function insertNodeAtPosition(head, data, position) {
  let done = false;
  let next = head;
  let currentPosition = 0;

  while (next && !done) {
    if (currentPosition === position - 1) {
      const node = new SinglyLinkedListNode(data);
      node.next = next.next;
      next.next = node;
      done = true;
    }
    currentPosition++;
    next = next.next;
  }

  return head;
}

// Runtime: O(n)
