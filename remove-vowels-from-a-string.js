// https://leetcode.com/problems/remove-vowels-from-a-string/

function removeVowels(s) {
  return s.replace(/[aeiou]/gi, '');
}

// Runtime: O(s)
