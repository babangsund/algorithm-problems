// https://leetcode.com/problems/validate-binary-search-tree

// DFS traversal, O(n) runtime, O(h) space
function isValidBST(root, min = null, max = null) {
  if (!root) {
    return true;
  }

  if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
    return false;
  }

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
}
