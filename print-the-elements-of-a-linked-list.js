// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem

function printLinkedList(head) {
  let next = head;

  while (next) {
    console.log(next.data);
    next = next.next;
  }
}
