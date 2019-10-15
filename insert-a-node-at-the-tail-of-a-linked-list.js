// https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem

function insertNodeAtTail(head, data) {
  const tail = new SinglyLinkedListNode(data);
  if (!head) return tail;

  let next = head;

  while (next.next) {
    next = next.next;
  }

  next.next = tail;
  return head;
}

// Runtime: O(n)
