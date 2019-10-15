// https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list/problem

function removeDuplicates(head) {
  if (!head) return null;

  let next = head.next;
  while (next && head.data === next.data) {
    next = next.next;
  }

  head.next = removeDuplicates(next);
  return head;
}

// Runtime: O(n)
// Space: O(n)
