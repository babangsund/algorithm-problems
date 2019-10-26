// https://leetcode.com/problems/verifying-an-alien-dictionary/

function isSorted(left, right, dict) {
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    const leftI = dict.get(left[i]);
    const rightI = dict.get(right[j]);

    if (rightI > leftI) return true;
    else if (rightI < leftI) return false;

    i++;
    j++;
  }

  return i == left.length ? true : false;
}

function isAlienSorted(words, order) {
  const dict = new Map();

  for (const i in order) {
    dict.set(order[i], parseInt(i));
  }

  for (let i = 0; i < words.length - 1; i++) {
    const currWord = words[i];
    const nextWord = words[i + 1];
    if (!isSorted(currWord, nextWord, dict)) {
      return false;
    }
  }

  return true;
}

// Runtime: O(o + w*s), o = order, w = words, s = word in words
// Space: O(o), o = order
