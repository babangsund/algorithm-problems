// https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem

function sortedInsert(head, data) {
  const node = new DoublyLinkedListNode(data);

  if (!head) {
    return node;
  }

  let current = head;

  while (current) {
    const {next, prev} = current;

    if (current.data > data && prev) {
      prev.next = node;
      node.next = current;
      return head;
    }

    if (current.data > data) {
      node.next = current;
      return node;
    }

    if (!current.next) {
      current.next = node;
      return head;
    }

    current = current.next;
  }

  return head;
}
