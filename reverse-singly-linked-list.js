// https://leetcode.com/problems/reverse-linked-list/

function reverseList(head, prev = null) {
  if (!head) return prev;

  const next = head.next;
  head.next = prev;

  return reverseList(next, head);
}

// Runtime: O(n), n = ll nodes
// Space: O(n)
