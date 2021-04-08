/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  let column = [];
  const arrayColumn = (arr, n) => arr.map((x) => x[n]);

  matrix[0].forEach((currentValue, x) => {
    if (currentValue !== 0) {
      column = arrayColumn(matrix, x);
      result += column.reduce((acc, el, y) => (column[y - 1] !== 0 ? acc + el : acc + 0));
    }
  });

  return result;
}

module.exports = getMatrixElementsSum;
