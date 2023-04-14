const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let string = String(n);
  let max = +String(n).slice(1);

  for (let i = 0; i < string.length; i++) {
    let temp = +(string.slice(0, i) + string.slice(i+1));
    if (temp > max) {
      max = temp
    }
  }

  return max;
}

module.exports = {
  deleteDigit
};
