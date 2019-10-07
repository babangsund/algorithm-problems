""" https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem """


def reverse(head):
    nextPrev = head.next
    nextNext = head.prev

    head.prev = nextPrev
    head.next = nextNext

    if head.prev is None:
        return head

    return reverse(head.prev)
