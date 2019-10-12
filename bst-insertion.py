""" https://www.hackerrank.com/challenges/binary-search-tree-insertion/problem """

# CODE PROVIDED BY TASK STARTS


class Node:
    def __init__(self, info):
        self.info = info
        self.left = None
        self.right = None
        self.level = None

    def __str__(self):
        return str(self.info)


def preOrder(root):
    if root is None:
        return
    print(root.info, end=" ")
    preOrder(root.left)
    preOrder(root.right)


class BinarySearchTree:
    def __init__(self):
        self.root = None

    # CODE PROVIDED BY TASK ENDS

    """ Create tree.insert method """

    def insert(self, val):
        if self.root is None:
            self.root = Node(val)
        else:
            self._insert(self.root, val)
        return self.root

    def _insert(self, root, val):
        if root is None:
            return
        if val < root.info:
            if root.left:
                self._insert(root.left, val)
            else:
                root.left = Node(val)
        if val > root.info:
            if root.right:
                self._insert(root.right, val)
            else:
                root.right = Node(val)
