// https://leetcode.com/problems/climbing-stairs/

function mem(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    } else {
      const result = fn(...args);
      cache[args] = result;
      return result;
    }
  };
}

const climbStairs = mem((n, i = 0) => {
  if (i > n) return 0;
  else if (i === n) return 1;
  else return climbStairs(n, i + 1) + climbStairs(n, i + 2);
});

// Runtime: O(n)
// Space: O(n)
