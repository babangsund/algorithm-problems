// https://leetcode.com/problems/happy-number/

function sqStr(ns) {
  const n = parseInt(ns);
  return n * n;
}

function isHappy(n) {
  let result = n;
  let iterations = 0;

  while (result !== 1) {
    iterations++;
    result = String(result)
      .split('')
      .reduce((p, c) => {
        return sqStr(c) + p;
      }, 0);
    if (iterations === 10) return false;
  }

  return true;
}

// Runtime: O(1)
// Space: O(1)
