// A left rotation operation on an array shifts each of the array's elements 1 unit to the left.
// For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2].

/**
 * Given [1,2,3,4,5], 2
 * return [3,4,5,1,2]
 */

/**
 * @param {number[]} a
 * @param {number} d
 * return {number[]}
 */

function leftRotation(a, d) {
  const length = a.length;
  const result = [];

  for (let i = 0; i < length; i++) {
    const placement = (((-d + i) % length) + length) % length;
    result[placement] = a[i];
  }

  return result;
}

// Runtime is O(a)
// Space is O(a)
