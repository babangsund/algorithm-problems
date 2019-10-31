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

/* Solution #2 */
function lengthOfLongestSubstring(s) {
  if (!s) {
    return 0;
  }

  const map = new Map();
  let max = 1;

  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]), i);
    }
    max = Math.max(max, j - i + 1);
    map.set(s[j], j + 1);
  }

  return max;
}

// Runtime: O(n)
// Space: O(m), m = map bound by alphabet length
