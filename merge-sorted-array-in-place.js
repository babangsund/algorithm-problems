// https://leetcode.com/problems/merge-sorted-array/

function merge(nums1, m, nums2, n) {
  const copy1 = nums1.splice(0, m);
  let index = 0;
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < n + m; i++) {
    const v1 = copy1[p1];
    const v2 = nums2[p2];

    if (v1 < v2 || v2 === undefined) {
      nums1[i] = v1;
      p1++;
    } else {
      nums1[i] = v2;
      p2++;
    }
  }

  return nums1;
}

// Runtime: O(m + n)
// Space: O(m)
