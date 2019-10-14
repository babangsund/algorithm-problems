""" https://www.hackerrank.com/challenges/tree-top-view/problem """


def topView(root):
    if root is None:
        return

    queue = []
    map = dict()
    hd = 0
    root.hd = hd

    queue.append(root)

    while len(queue):
        root = queue[0]
        hd = root.hd
        if hd not in map:
            map[hd] = root.info
        if root.left:
            root.left.hd = hd - 1
            queue.append(root.left)
        if root.right:
            root.right.hd = hd + 1
            queue.append(root.right)
        queue.pop(0)

    for i in sorted(map):
        print(map[i], end=" ")
