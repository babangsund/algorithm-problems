// https://leetcode.com/problems/k-closest-points-to-origin/

function kClosest(points, K) {
  return points
    .sort((a, b) => {
      a = a.reduce((p, c) => p + c * c, 0);
      b = b.reduce((p, c) => p + c * c, 0);
      return a - b;
    })
    .slice(0, K);
}

// Runtime: O(n log n)
// Space: O(n)
