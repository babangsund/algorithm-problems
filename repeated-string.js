// Given an integer, s, find and print the number of letter a's in the first n letters of Lilah's infinite string.
// For example, if the string a = 'abcac' and n = 10, the substring we consider is abcaabcaac, the first  characters of her infinite string.
// There are 4 occurrences of a in the substring.

/**
 * Given s = "aba", n = 10
 * Substr is abaabaabaa
 * return 7.
 */

/**
 * @param {string} s
 * @param {number} n
 * @return {number}
 */

function getAs(str) {
  return str.split('').filter(c => c === 'a').length;
}
function repeatedString(s, n) {
  // guard
  if (s.length === 1 && s[0] === 'a') return n;

  const repeat = parseInt(n / s.length, 0);

  const aCount = getAs(s) * repeat;
  const restCount = getAs(s.slice(0, n % s.length));

  return aCount + restCount;
}

/* Notes
 *
 * use parseInt base 0, to remove remainder
 * Cover edge/other cases!
 *  - s.length is 1
 *  - n is REALLY big, i.e. 9999999
 **/
