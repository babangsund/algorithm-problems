// https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list/problem

function removeDuplicates(head) {
  if (!head || !head.next) return head;

  let next = head;

  while (next.next) {
    if (next.data !== next.next.data) {
      next = next.next;
    } else {
      next.next = next.next.next;
    }
  }

  return head;
}

// Runtime: O(n)
// Space: O(n)
