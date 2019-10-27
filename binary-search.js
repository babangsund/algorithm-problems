// https://leetcode.com/explore/learn/card/binary-search/138/background/1038/

function search(nums, target) {
  let mid;
  let from = 0;
  let to = nums.length - 1;

  while (from <= to) {
    mid = Math.floor((to - from) / 2) + from;
    if (nums[mid] === target) return mid;
    if (target < nums[mid]) to = mid - 1;
    else from = mid + 1;
  }

  return -1;
}

// Runtime: O(log(n))
// Space: O(1)
