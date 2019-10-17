// https://leetcode.com/problems/find-anagram-mappings/

function anagramMappings(A, B) {
  const bMap = new Map();
  for (const i in B) {
    bMap.set(B[i], i);
  }

  const result = [];
  for (const i in A) {
    result[i] = bMap.get(A[i]);
  }

  return result;
}

// Runtime: O(n), n = a or b length
