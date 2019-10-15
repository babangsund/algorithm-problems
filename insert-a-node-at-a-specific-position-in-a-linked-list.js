// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem

function insertNodeAtPosition(head, data, position) {
  let next = head;
  let currentPosition = 0;

  while (next) {
    if (currentPosition === position - 1) {
      const node = new SinglyLinkedListNode(data);
      node.next = next.next;
      next.next = node;
      break;
    }
    currentPosition++;
    next = next.next;
  }

  return head;
}

// Runtime: O(n)
