""" https://www.hackerrank.com/challenges/is-binary-search-tree/problem """


def check_binary_search_tree_(root, min=None, max=None):
    if root is None:
        return True

    data = root.data

    if min is not None and data <= min:
        return False

    if max is not None and data >= max:
        return False

    if root.left is not None and not check_binary_search_tree_(root.left, min, data):
        return False

    if root.right is not None and not check_binary_search_tree_(root.right, data, max):
        return False

    return True
