// https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem

function mem(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) return cache[args];
    else {
      const result = fn(...args);
      cache[args] = result;
      return result;
    }
  };
}

function fib(n) {
  if (n < 2) return n;
  else return fib(n - 2) + fib(n - 1);
}

fib = mem(fib);

// With memoization, lookup takes constant time O(1)
// Runtime: O(n), where n is the depth
