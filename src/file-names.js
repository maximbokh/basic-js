const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {

  let newMas = [];
  for (let i = 0; i < names.length; i += 1) {
    let mas = names.slice(0, i);
    let length = mas.filter(item => item === names[i]).length;
    let newLength = newMas.filter(item => item === names[i]).length;

    if (length === 0 && newLength === 0) {
      newMas.push(names[i]);
  } else if (length === 0 && newLength !== 0) {
      newMas.push(`${names[i]}(${newLength})`);
     } else {
        newMas.push(`${names[i]}(${length})`)
      }
  }

  return newMas;

 // throw new NotImplementedError('Not implemented');
}

module.exports = {
  renameFiles
};
