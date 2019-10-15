// https://leetcode.com/problems/two-sum/

function twoSum(nums, target) {
  const pairs = {};

  for (const index in nums) {
    const value = nums[index];
    const complement = target - value;

    if (pairs[complement]) {
      return [pairs[complement], index];
    }

    pairs[value] = index;
  }

  return [];
}

// Runtime: O(n)
