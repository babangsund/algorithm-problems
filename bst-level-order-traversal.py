""" https://www.hackerrank.com/challenges/tree-level-order-traversal/problem """


def levelOrder(root):
    queue = [root]

    while len(queue):
        node = queue.pop(0)
        print(str(node.info), end=" ")

        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
