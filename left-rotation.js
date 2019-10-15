// https://www.hackerrank.com/challenges/array-left-rotation/problem

function leftRotation(a, d) {
  const length = a.length;
  const result = [];

  for (let i = 0; i < length; i++) {
    const placement = (((-d + i) % length) + length) % length;
    result[placement] = a[i];
  }

  return result;
}

// Runtime: O(a)
// Space is O(a)
