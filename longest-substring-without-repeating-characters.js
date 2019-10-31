// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* Solution #1 */
function mem(fn) {
  const cache = {};
  return function(...args) {
    let result = cache[args];
    if (result !== undefined) return result;
    else {
      result = fn(...args);
      cache[args] = result;
      return result;
    }
  };
}

const isUnique = mem(s => {
  const set = new Set();

  for (const c of s) {
    if (set.has(c)) return false;
    else set.add(c);
  }

  return true;
});

function lengthOfLongestSubstring(s) {
  if (!s) {
    return 0;
  }

  let max = 1;

  function findSubstring(start) {
    let end = start;

    while (end <= s.length) {
      const candidate = s.slice(start, end);
      if (isUnique(candidate)) {
        if (candidate.length > max) {
          max = candidate.length;
        }
        end++;
      } else break;
    }
  }

  for (let i = 0; i < s.length; i++) {
    findSubstring(i);
  }

  return max;
}

// Runtime: O(n^3)
// Space: O(s + c), s = set, c = cache; size of set is bound by size of alphabet (O(min(s, a) + c))?
