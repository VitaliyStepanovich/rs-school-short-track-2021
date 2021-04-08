/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const positiveNumbers = arr.filter((item) => item !== -1).sort((a, b) => a - b);
  const arrTransformed = [];

  arr.forEach((item) => {
    if (item === -1) {
      arrTransformed.push(item);
    } else {
      arrTransformed.push(positiveNumbers[0]);
      positiveNumbers.splice(0, 1);
    }
  });

  return arrTransformed;
}

module.exports = sortByHeight;
