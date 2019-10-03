/*
 * A linked list is said to contain a cycle if any node
 * is visited more than once while traversing the list.
 */

/*
 * Return 1 if a cycle is detected, otherwise 0
 */

class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

function detectCycle(head) {
  let slow = head.next;
  let fast = head.next;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
