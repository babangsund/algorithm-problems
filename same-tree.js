// https://leetcode.com/problems/same-tree/

function isSameTree(p, q) {
  if (!p && !q) {
    return true;
  }

  if (!p || !q) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Runtime: O(n), n = p + q nodes
// Space: O(n) worst case, O(log(n)) best case

/* Iterative */
function check(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return true;
}

function isSameTree(p, q) {
  if (!check(p, q)) return false;

  const queue = [[p, q]];

  while (queue.length) {
    const [p, q] = queue.shift();

    if (!check(p, q)) return false;
    if (!check(p && p.left, q && q.left)) return false;
    if (!check(p && p.right, q && q.right)) return false;

    if (p && p.left) {
      queue.push([p.left, q.left]);
    }

    if (p && p.right) {
      queue.push([p.right, q.right]);
    }
  }

  return true;
}

// Runtime: O(p + q)
// Space: O(p + q) worstCase, O(log(q) + log(p)) best case
