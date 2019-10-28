# https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem


def has_cycle(head):
    slow = head
    fast = head

    while fast.next and fast.next.next:
        slow = slow.next
        fast = fast.next.next

        if slow == fast:
            return True

    return False
