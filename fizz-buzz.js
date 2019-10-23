// https://leetcode.com/problems/fizz-buzz/

function fizzBuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    const isBy3 = i % 3 === 0;
    const isBy5 = i % 5 === 0;

    if (isBy3 && isBy5) result.push('FizzBuzz');
    else if (isBy3) result.push('Fizz');
    else if (isBy5) result.push('Buzz');
    else result.push(String(i));
  }

  return result;
}

// Runtime: O(n)
// Space: O(n)
