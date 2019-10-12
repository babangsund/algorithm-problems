""" https://www.hackerrank.com/challenges/tree-preorder-traversal/problem """


def pre_order(root):
    if root is None:
        return ""

    print(rec(root))


def rec(root):
    if root is None:
        return ""

    return " ".join(str(s) for s in [root.info, rec(root.left), rec(root.right)] if s)


# Runtime: O(n), where n is the number of nodes in the tree.
