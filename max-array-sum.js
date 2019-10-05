// Given an array of integers, find the subset of non-adjacent elements with the maximum sum. Calculate the sum of that subset.

// Given arr [3,7,4,6,5]
// Our possible subsets are [3,4,5],[3,4],[3,6],[3,5],[7,6],[7,5],[4,5].
// The largest subset sum is 13 from subset [7,6]

function maxSubsetSum(arr) {
  let inc = arr[0];
  let exc = 0;

  for (let i = 1; i < arr.length; i++) {
    const next = Math.max(exc, inc);
    inc = exc + arr[i];
    exc = next;
  }

  return Math.max(exc, inc);
}

// Runtime: O(n)
