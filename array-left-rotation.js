// https://www.hackerrank.com/challenges/array-left-rotation/problem

function rotateLeft(a, d) {
  const rotated = [];

  for (const i in a) {
    const newIndex = (i - d + n) % n;
    rotated[newIndex] = a[i];
  }

  console.log(rotated.join(' '));
}
