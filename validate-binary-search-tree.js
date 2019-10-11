// https://leetcode.com/problems/validate-binary-search-tree

var isValidBST = function(root, min = null, max = null) {
  if (!root) {
    return true;
  }

  if (min !== null && root.val <= min) {
    return false;
  }

  if (max !== null && root.val >= max) {
    return false;
  }

  if (root.left && !isValidBST(root.left, min, root.val)) {
    return false;
  }

  if (root.right && !isValidBST(root.right, root.val, max)) {
    return false;
  }

  return true;
};
