// https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem

// recursive
function reverseRec(head) {
  const nextPrev = head.next;
  const nextNext = head.prev;

  head.prev = nextPrev;
  head.next = nextNext;

  if (head.prev === null) return head;
  return reverseRec(head.prev);
}

// iterative
function reverseIter(head) {
  let current = head;

  while (current) {
    const nextPrev = current.next;
    const nextNext = current.prev;

    current.prev = nextPrev;
    current.next = nextNext;

    if (current.prev === null) return current;
    current = current.prev;
  }

  return current;
}
