// https://leetcode.com/problems/next-greater-element-i/

var nextGreaterElement = function(nums1, nums2) {
  let result = [];
  for (let v of nums1) {
    const i = nums2.indexOf(v);
    let find = false;
    for (let j = i + 1; j < nums2.length; j++) {
      if (nums2[j] > v) {
        result.push(nums2[j]);
        find = true;
        break;
      }
    }
    if (!find) result.push(-1);
  }
  return result;
};

// Runtime: O(a * b)
