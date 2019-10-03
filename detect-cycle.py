"""
A linked list is said to contain a cycle if any node
is visited more than once while traversing the list.
"""

"""
Return 1 if a cycle is detected, otherwise 0
"""


class Node(object):
    def __init__(self, data=None, next_node=None):
        self.data = data
        self.next = next_node


def detect_cycle(head):
    slow = head
    fast = head

    while fast.next and fast.next.next:
        fast = fast.next.next
        slow = slow.next

        if slow == fast:
            return 1

    return 0
