// https://www.hackerrank.com/challenges/arrays-ds/problem

function reverseArray(a) {
  const result = [];

  for (let i = a.length - 1; i >= 0; i--) {
    result.push(a[i]);
  }

  return result;
}
