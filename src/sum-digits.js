const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let count = 0;
  let stringNumber = n.toString();
  for (let i = 0; i < stringNumber.length; i += 1) {
    count += Number(stringNumber[i]);
  }

  if (count >= 10) {
     return getSumOfDigits(count);
  } else return count;
}

module.exports = {
  getSumOfDigits
};
