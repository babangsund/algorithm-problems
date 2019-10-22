// https://leetcode.com/problems/reverse-string/

function reverseString(s) {
  let p1 = 0;
  let p2 = s.length - 1;
  for (let i = 0; i < s.length / 2; i++) {
    const v1 = s[p1];
    const v2 = s[p2];

    s[p1] = v2;
    s[p2] = v1;

    p1++;
    p2--;
  }
}

// Runtime: O(log s)
// Space: O(1)

// Naive solution:

//const copy = s.slice();

//for (let i = 0; i < s.length; i++) {
//  s[i] = copy[s.length - i - 1]
//}

// Runtime: O(s)
// Space: O(s)
