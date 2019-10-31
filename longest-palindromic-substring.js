// https://leetcode.com/problems/longest-palindromic-substring/

/* Solution #1 */

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

/* Solution #2 */

class LongestPalindrome {
  constructor(string) {
    this.longest = string[0];
    this.string = string;
    this.max = 1;

    this.findLongest();
  }

  findLongest() {
    for (let i = 0; i < this.string.length; i++) {
      const [max, longest] = this.findPalindrome(i);
      if (max > this.max) {
        this.max = max;
        this.longest = longest;
      }
    }
  }

  findPalindrome(i) {
    const {max, string} = this;
    let nextMax = 1;
    let right = i;
    let left = i;

    // Move right until they're no longer equal
    while (right < string.length && string[right] === string[right + 1]) {
      nextMax++;
      right++;
    }

    while (
      left > -1 &&
      right < string.length &&
      string[left] === string[right]
    ) {
      nextMax += 2;
      right++;
      left--;
    }

    return nextMax > max ? [nextMax, string.slice(left + 1, right)] : [];
  }
}

function longestPalindrome(s) {
  return !s ? '' : new LongestPalindrome(s).longest;
}

// Runtime: O(n^2)
// Space: O(k), k = longest
