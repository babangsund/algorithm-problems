// https://www.hackerrank.com/challenges/2d-array/problem

function processHourglass(arr, row, column) {
  const hourglass = [];

  // top
  hourglass.push(...arr[row - 1].slice(column - 1, column + 2));
  // middle
  hourglass.push(arr[row][column]);
  // bottom
  hourglass.push(...arr[row + 1].slice(column - 1, column + 2));

  return hourglass.reduce((p, c) => p + c, 0);
}

function hourglassSum(arr) {
  const hourglasses = Array(
    arr.length * arr.length - (arr.length * 4 - 4),
  ).fill(0);

  let row = 1;
  let column = 1;
  let hourglass = 0;

  while (hourglass < hourglasses.length) {
    hourglasses[hourglass] = processHourglass(arr, row, column);
    hourglass++;

    if (hourglass % 4 === 0) {
      column = 1;
      row++;
    } else {
      column++;
    }
  }

  return Math.max(...hourglasses);
}
