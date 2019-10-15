// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse/problem

function reversePrint(head) {
  if (!head) return;

  const result = [];
  let next = head;

  while (next) {
    result.push(next.data);
    next = next.next;
  }

  for (let i = result.length - 1; i >= 0; i--) {
    console.log(result[i]);
  }
}

// Runtime: O(n)
