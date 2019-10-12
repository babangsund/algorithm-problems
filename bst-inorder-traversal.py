""" https://www.hackerrank.com/challenges/tree-inorder-traversal/problem """


def in_order(root):
    if root is not None:
        print(rec(root))


def rec(root):
    if root is None:
        return

    return " ".join(str(s) for s in [rec(root.left), root.info, rec(root.right)] if s)
