// https://leetcode.com/problems/3sum/

function threeSum(nums) {
  if (nums.length < 3) return [];
  if (nums.every(x => x === 0)) return [[0, 0, 0]];

  nums = nums.sort((a, b) => a - b);

  const result = new Set();
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    const value = nums[i];
    let left = i + 1;
    let right = length - 1;

    while (left < right) {
      const total = value + nums[left] + nums[right];
      if (total === 0) {
        const current = [value, nums[left], nums[right]].toString();
        if (!result.has(current)) result.add(current);
        right--;
      } else if (total < 0) left++;
      else right--;
    }
  }

  return Array.from(result.keys()).map(x => x.split(','));
}

// Runtime: O(n^2)
// Space: O(k), k = result
