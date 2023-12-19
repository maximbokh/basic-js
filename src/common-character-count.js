const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let newString = '';
  let newFind = '';

  for (let i = 0; i < s1.length; i += 1) {
    if (s2.indexOf(s1[i]) != -1) {
      newString = s2.slice(0, s2.indexOf(s1[i])) + s2.slice(s2.indexOf(s1[i]) + 1);
      newFind = s1.slice(1);;
      count = 1 + getCommonCharacterCount(newFind, newString);

      return count;
    }
    }

    return count;
}

module.exports = {
  getCommonCharacterCount
};
