// https://leetcode.com/problems/roman-to-integer/

function romanToInt(romans) {
  const conversions = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevN = 0;

  for (let i = romans.length - 1; i >= 0; i--) {
    const roman = romans[i];
    const n = conversions[roman];

    if (n < prevN) result -= n;
    else result += n;

    prevN = n;
  }

  return result;
}

// Runtime: O(n), n = romans.length
// Space: O(1)
