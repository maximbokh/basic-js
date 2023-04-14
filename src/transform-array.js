const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!")
    //return false;
  }
  let mas = [];

  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--discard-prev':
        discardPrev(i);
        break;
      case '--double-prev':
        doublePrev(i);
        break;
      case '--discard-next':
        discardNext(i);
        break;
      case '--double-next':
        doubleNext(i);
        break;
      default:
        mas.push(arr[i])

    }
      function discardPrev(value) {

        if (value === 0 || value === arr.length - 1) {
           return;
        }
        else {
          mas.pop();
        }
      }

      function doublePrev(value) {

        if (value === 0 || value === arr.length - 1) {
           return;
        }
        else {
          mas.push(arr[value - 1]);
          return;
        }
      }

      function discardNext(value) {

        if (value === 0 || value === arr.length - 1) {
           return;
        }
        else {
          i = value + 2;
          return;
        }
      }

      function doubleNext(value) {

        if (value === 0 || value === arr.length - 1) {
           return;
        }
        else {
          mas.push(arr[value + 1]);
          return;
        }
      }
  }

  return mas;
}

module.exports = {
  transform
};
