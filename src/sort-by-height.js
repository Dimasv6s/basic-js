const { NotImplementedError } = require('../extensions/index.js');

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
  const arr2 = arr.filter(i => i != -1)
  arr2.sort((a, b) => a - b)
  arr2.reverse()

  return arr.map(i => {
    if (i != -1) {
      return arr2.pop()
    } else {
      return i
    }
  })
  
}

module.exports = {
  sortByHeight
};
