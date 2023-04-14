const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(mas) {
  let cat = '^^';
  let number = 0;
  mas.forEach(value => {
    for (let i = 0; i < value.length; i++) {
      if (value[i] === cat) {
        number++;
      }
    }
    })

  return number;
}

module.exports = {
  countCats
};
