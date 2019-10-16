// https://leetcode.com/problems/two-sum/

function twoSum(nums, target) {
  const pairMap = new Map();

  for (const index in nums) {
    const value = nums[index];
    const complement = target - value;

    if (pairMap.has(complement)) {
      return [pairMap.get(complement), index];
    }

    pairMap.set(value, index);
  }

  return [];
}

// Runtime: O(n), n = nums.length
// Space: O(n), n
