// https://leetcode.com/problems/unique-number-of-occurrences/

function uniqueOccurrences(arr) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in map) map[arr[i]] += 1;
    else map[arr[i]] = 1;
  }

  const values = Object.values(map);

  if (values.length === new Set(values).size) return true;
  else return false;
}

// Runtime: O(n)
// Space: O(n)
