// https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s) {
  const word = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const half = Math.floor(word.length / 2);

  for (let i = 0; i < half + 1; i++) {
    const first = word[i];
    const last = word[word.length - 1 - i];

    if (first !== last) return false;
  }

  return true;
}
