""" https://www.hackerrank.com/challenges/tree-postorder-traversal/problem """


def post_order(root):
    if root is not None:
        print(rec(root))


def rec(root):
    if root is None:
        return ""

    return " ".join([str(s) for s in [rec(root.left), rec(root.right), root.info] if s])
