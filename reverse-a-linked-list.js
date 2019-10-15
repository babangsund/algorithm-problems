// https://www.hackerrank.com/challenges/reverse-a-linked-list/problem

// iterative
function reverse(head) {
  if (!head) return null;

  let prev = null;
  let next = head;

  while (next) {
    const nextNext = next.next;

    next.next = prev;
    prev = next;

    next = nextNext;
  }

  return prev;
}

// recursive
function reverse(next, prev) {
  if (!next) return prev;

  const nextNext = next.next;
  next.next = prev;

  return reverse(nextNext, next);
}

// Runtime: O(n)
