// https://leetcode.com/problems/add-two-numbers/

function addTwoNumbers(l1, l2) {
  const ll = new ListNode(0);

  let next = ll;
  let carry = 0;
  let sum = 0;

  while (l1 || l2 || sum > 0) {
    if (l1) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    next.next = new ListNode(sum);
    next = next.next;

    sum = carry;
    carry = 0;
  }

  return ll.next;
}

// Runtime: O(l1 + l2)
// Space: O(k), k = l1 sum + l2 sum length
