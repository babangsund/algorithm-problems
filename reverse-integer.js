// https://leetcode.com/problems/reverse-integer/

function reverse(x) {
  const isNegative = x < 0 ? -1 : 1;

  const rev = parseInt(
    x
      .toString()
      .split('')
      .reverse()
      .join(''),
  );

  if (rev > Math.pow(2, 31) - 1) {
    return 0;
  }

  return isNegative * rev;
}

// Runtime: O(n)
// Space: O(1)
