// https://www.hackerrank.com/challenges/equal-stacks/problem

function sumArray(a) {
  return a.reduce((p, c) => p + c, 0);
}

function equalStacks(h1, h2, h3) {
  let s1 = sumArray(h1);
  let s2 = sumArray(h2);
  let s3 = sumArray(h3);

  while (h1.length && h2.length && h3.length) {
    let m = Math.min(s1, s2, s3);

    while (s1 > m) {
      s1 -= h1.shift();
    }
    while (s2 > m) {
      s2 -= h2.shift();
    }
    while (s3 > m) {
      s3 -= h3.shift();
    }

    if (s1 === s2 && s2 === s3) return s1;
  }
  return 0;
}

// Runtime: O(k), k = longest array
