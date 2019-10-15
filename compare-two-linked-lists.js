// https://www.hackerrank.com/challenges/compare-two-linked-lists/problem

function CompareLists(llist1, llist2) {
  if (!llist1 && !llist2) return 1;

  const data1 = llist1 && llist1.data;
  const data2 = llist2 && llist2.data;

  if (data1 === data2) {
    return CompareLists(llist1.next, llist2.next);
  }

  return 0;
}

// Runtime: O(n)
