// https://leetcode.com/problems/reorder-data-in-log-files/

function reorderLogFiles(logs) {
  const digitLogs = [];
  const letterLogs = [];
  const letterLogMap = new Map();

  for (const log of logs) {
    const [id, ...words] = log.split(' ');
    const isDigit = !isNaN(words[0]);

    if (isDigit) digitLogs.push(log);
    else {
      letterLogs.push(log);
      letterLogMap.set(log, words.join(' '));
    }
  }

  return letterLogs
    .sort((a, b) => {
      const aWords = letterLogMap.get(a);
      const bWords = letterLogMap.get(b);
      return aWords === bWords
        ? a.localeCompare(b)
        : aWords.localeCompare(bWords);
    })
    .concat(digitLogs);
}

// Runtime: O(n log n)
// Space: O(n)
