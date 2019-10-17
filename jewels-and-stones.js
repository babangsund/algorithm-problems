// https://leetcode.com/problems/jewels-and-stones/

function numJewelsInStones(J, S) {
  const regExp = new RegExp(`[${J}]`, 'g');
  const matches = S.match(regExp);
  return matches ? matches.length : 0;
}

// Runtime: O(S)
// Space: O(k), k = matches.length
