// https://leetcode.com/problems/first-missing-positive

var firstMissingPositive = function(nums) {
  const set = new Set(nums);
  let min = 1;

  while (set.has(min)) {
    min++;
  }

  return min;
};

// Runtime: O(n)
