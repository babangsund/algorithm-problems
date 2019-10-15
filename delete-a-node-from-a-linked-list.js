// https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem

function deleteNode(head, position) {
  let cur = 0;
  let prev = head;
  let next = head;

  while (cur < position) {
    cur++;
    prev = next;
    next = next.next;
  }

  if (next === head) {
    return next.next;
  }

  prev.next = next.next;
  return head;
}
