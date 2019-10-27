// https://leetcode.com/problems/minimum-depth-of-binary-tree/

function minDepth(root) {
  if (!root) return 0;

  const left = minDepth(root.left);
  const right = minDepth(root.right);

  if (!left) return 1 + right;
  if (!right) return 1 + left;

  return 1 + Math.min(left, right);
}

// Runtime: O(n), n = nodes
// Space: O(n) worst, O(log(n)) best
