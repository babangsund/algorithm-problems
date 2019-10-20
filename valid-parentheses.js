// https://leetcode.com/problems/valid-parentheses/

function isValid(word) {
  const len = word.length;
  if (len % 2 !== 0) return false;

  const closing = [];
  const open = ['(', '[', '{'];
  const close = [')', ']', '}'];

  for (const str of word) {
    if (open.includes(str)) {
      if (str === '(') closing.push(')');
      if (str === '[') closing.push(']');
      if (str === '{') closing.push('}');
    }

    if (close.includes(str)) {
      if (str === ')' && closing.pop() !== ')') return false;
      if (str === ']' && closing.pop() !== ']') return false;
      if (str === '}' && closing.pop() !== '}') return false;
    }
  }

  return closing.length === 0 ? true : false;
}

// Runtime: O(n), n = word.length;
// Space: O(n)
