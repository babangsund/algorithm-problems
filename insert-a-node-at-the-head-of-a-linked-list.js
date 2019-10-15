// https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem

function insertNodeAtHead(head, data) {
  const node = new SinglyLinkedListNode(data);
  node.next = head;
  return node;
}

// Runtime: O(n)
