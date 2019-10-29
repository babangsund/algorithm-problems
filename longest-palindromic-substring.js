// https://leetcode.com/problems/longest-palindromic-substring/

function getPalindrome(s, i, max) {
  let end = i;
  let start = i;
  let nextMax = 1;

  while (end < s.length && s[end] === s[end + 1]) {
    end++;
    nextMax++;
  }

  while (start >= 0 && end < s.length) {
    if (s[start] === s[end]) {
      end++;
      start--;
      nextMax += 2;
    } else break;
  }

  return nextMax > max ? [nextMax, s.slice(start + 1, end)] : [];
}

function longestPalindrome(s) {
  let max = 1;
  let longest = '';

  // O(n)
  for (let i = 0; i < s.length; i++) {
    const [nextMax, nextLongest] = getPalindrome(s, i, max);
    if (nextMax && nextLongest) {
      max = nextMax;
      longest = nextLongest;
    }
  }

  return longest;
}

// Runtime: O(n^2)
// Space: O(k), k = longest
