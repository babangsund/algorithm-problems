// https://leetcode.com/problems/single-row-keyboard/

var calculateTime = function(keyboard, word) {
  let finger = 0;
  let totalTime = 0;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const letterIndex = keyboard.indexOf(letter);

    const time = Math.abs(finger - letterIndex);

    finger = letterIndex;
    totalTime += time;
  }

  return totalTime;
};

// Runtime: O(w), w = word.length
