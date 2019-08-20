//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

/**
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

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

// BCR: O(n)
// Solution: O(n)
