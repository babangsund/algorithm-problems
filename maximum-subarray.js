// https://leetcode.com/problems/maximum-subarray/

function maxSubArray(nums) {
  const n = nums.length;
  let currSum = nums[0],
    maxSum = nums[0];

  for (let i = 1; i < n; i++) {
    currSum = Math.max(nums[i], currSum + nums[i]);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}

// Runtime: O(n)
// Space: O(1)
