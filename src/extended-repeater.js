const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let strItem = '';
    let strItemAdd = '';
    let mas = []
    let repeatTimes = options['repeatTimes'] || 1;
    let separator = options['separator'] || '+';
    let addition = options['addition'];
    let additionRepeatTimes = options['additionRepeatTimes'] || 1;
    let additionSeparator  = options['additionSeparator']||'|';

    if (addition !== undefined) {
      if (additionRepeatTimes === 1) {
        strItemAdd = `${addition}`
      } else {
        let mask = [];
        for (let i = 0; i < additionRepeatTimes; i++) {
          mask.push(`${addition}`);
        }
        strItemAdd = mask.join(additionSeparator);
      }
    }
    strItem = `${str}${strItemAdd}`;

    for (let i = 0; i < repeatTimes; i++) {
      mas.push(strItem)
    }
    if (mas.length === 1) {

      return mas[0];
    } else {

      return mas.join(separator);
    }

}


module.exports = {
  repeater
};
