""" https://www.hackerrank.com/challenges/is-binary-search-tree/problem """


# DFS traversal, O(n) runtime, O(h) space
def check_binary_search_tree_(root, min=None, max=None):
    if root is None:
        return True

    if (min is not None and root.data <= min) or (max is not None and root.data >= max):
        return False

    is_left_valid = check_binary_search_tree_(root.left, min, root.data)
    is_right_valid = check_binary_search_tree_(root.right, root.data, max)

    return is_left_valid and is_right_valid
