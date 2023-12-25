const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct;
  }
encrypt(string, key) {
  if (arguments.length < 2) {
    throw new Error("Incorrect arguments!");
}
  for (let i = 0; i < arguments.length; i +=1) {
    if (arguments[i] === undefined) {
      throw new Error("Incorrect arguments!");
    }
}
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let codeString = [];
  let fullString = [];
  let reversed = key.split('').reverse();

  for (let i = 0; i < string.length; i += 1) {
    if (alphabet.indexOf(string[i].toUpperCase()) !== -1) {
      let last = reversed.pop();
      fullString.push(last);
      reversed.unshift(last);
    } else {
        fullString.push(string[i]);
      }
   }

  for (let i = 0; i < string.length; i += 1 ) {
    let indexString = alphabet.indexOf(string[i].toUpperCase());
    let indexfullString = alphabet.indexOf(fullString[i].toUpperCase());
    let indexSum = (indexString + indexfullString) >= 26 ? indexString + indexfullString - 26 : indexString + indexfullString;
    codeString.push(alphabet[indexSum] || string[i].toUpperCase());
  }

  if (this.direct !== false) {
    return codeString.join('');
  } else {
      return codeString.reverse().join('');
  }
}

decrypt(string, key) {
  if (arguments.length < 2) {
    throw new Error("Incorrect arguments!");
}

  for (let i = 0; i < arguments.length; i +=1) {
    if (arguments[i] === undefined) {
      throw new Error("Incorrect arguments!");
    }
}
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let codeString = [];
  let fullString = [];
  let reversed = key.split('').reverse();

  for (let i = 0; i < string.length; i += 1) {
    if (alphabet.indexOf(string[i].toUpperCase()) !== -1) {
      let last = reversed.pop();
      fullString.push(last);
      reversed.unshift(last);
      } else {
          fullString.push(string[i]);
      }
   }

  for (let i = 0; i < string.length; i += 1 ) {
    let indexString = alphabet.indexOf(string[i].toUpperCase());
    let indexfullString = alphabet.indexOf(fullString[i].toUpperCase());
    let indexSum = (indexString - indexfullString) < 0 ? indexString - indexfullString + 26 : indexString - indexfullString;
    codeString.push((indexString !== -1 || indexfullString !== -1) ? alphabet[indexSum] : string[i].toUpperCase());
  }

  if (this.direct !== false) {
    return codeString.join('');
  } else {
      return codeString.reverse().join('');
  }
}
}

module.exports = {
  VigenereCipheringMachine
};
