// https://leetcode.com/problems/split-a-string-in-balanced-strings/

function balancedStringSplit(s) {
  let diff = 0;
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char === 'L') diff--;
    else diff++;

    if (diff === 0) total++;
  }

  return total;
}

// Runtime: O(n)
// Space: O(1)
