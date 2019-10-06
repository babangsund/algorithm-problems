""" https://www.hackerrank.com/challenges/binary-search-tree-lowest-common-ancestor/problem """


def lca(root, v1, v2):
    if root.info < v1 and root.info < v2:
        return lca(root.right, v1, v2)

    if root.info > v1 and root.info > v2:
        return lca(root.left, v1, v2)

    return root
