module.exports = function longestConsecutiveLength(array) {
  // your solution here
  let longestConsecutiveLength = 1,
    counter = 0;
  let arrLen = array.length;

  if (arrLen === 0) return 0;
  if (arrLen === 1) return 1;

  array.sort(function (a, b) {
    if (b >= a) return -1;
    return 1;
  });

  let i, j, el;

  for (i = 1, j = arrLen; i <= j - 1; i++) {
    if (array[i] === array[i - 1])
      continue;
    if (array[i] - 1 === array[i - 1]) {
      counter++;
    } else counter = 1;
    longestConsecutiveLength = Math.max(counter, longestConsecutiveLength);
  }
  return longestConsecutiveLength;
}