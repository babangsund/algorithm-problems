// https://www.hackerrank.com/challenges/find-the-merge-point-of-two-joined-linked-lists/problem

// Solution #1

function findMergeNode(headA, headB) {
  let nextA = headA;
  let nextB = headB;

  while (nextA !== nextB) {
    if (nextA.next) nextA = nextA.next;
    else nextA = headB;

    if (nextB.next) nextB = nextB.next;
    else nextB = headA;
  }

  return nextB.data;
}
// Runtime: O(n)
// Space: Constant

// Solution #2
function findMergeNode(headA, headB) {
  const mapA = new Map();
  let nextA = headA;

  while (nextA) {
    map.set(nextA, nextA);
    nextA = nextA.next;
  }

  let nextB = headB;
  while (nextB) {
    if (mapA.has(nextB)) return nextB.data;
    nextB = nextB.next;
  }
}
// Runtime: O(a + b)
// Space: O(a)

// Solution #3
function findMergeNode(headA, headB) {
  let nextA = headA;
  while (nextA) {
    nextA.visited = true;
    nextA = nextA.next;
  }

  let nextB = headB;
  while (!nextB.visited) {
    nextB = nextB.next;
  }

  return nextB.data;
}
// Runtime: O(a + b)
// Space: Constant
