// https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists/problem

function mergeLists(head1, head2) {
  const merged = [];

  // O(a + b)
  while (head1 || head2) {
    if (head1) {
      merged.push(head1);
      head1 = head1.next;
    }
    if (head2) {
      merged.push(head2);
      head2 = head2.next;
    }
  }

  // O(n log a+b)
  const sorted = merged.sort((a, b) => {
    return b.data - a.data;
  });

  const head = sorted.pop();
  let next = head;

  // O(a+b)
  while (sorted.length) {
    const node = sorted.pop();
    next.next = node;
    next = node;
  }

  next.next = null;
  return head;
}

// Runtime: O(n log a+b)
// Space: O(a+b)
