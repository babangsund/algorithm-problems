// https://leetcode.com/problems/range-sum-of-bst/

function rangeSumBST(root, L, R) {
  const sum = dfs(root, val => {
    if (val >= L && val <= R) {
      return val;
    } else {
      return 0;
    }
  });
  return sum;
}

function dfs(root, visit) {
  if (!root) return 0;

  return visit(root.val) + dfs(root.left, visit) + dfs(root.right, visit);
}

// Runtime: O(v+e)
// Space: O(v)
