function caesarCipher(str, num) {
  const encrypted = [];
  const letter = /[a-z]/i;
  let upperBase = 65;
  let lowerBase = 97;
  let newCode;
  
  for (let i = 0; i < str.length; i++) {
    if (!letter.test(str[i])) {
      encrypted.push(str[i]);
    } else {
      let charCode = str.charCodeAt(i);

      if (str[i] === str[i].toUpperCase()) {
        newCode = ((charCode - upperBase + num) % 26) + upperBase;
      } else if (str[i] === str[i].toLowerCase()) {
        newCode = ((charCode - lowerBase + num) % 26) + lowerBase;
      }

      encrypted.push(String.fromCharCode(newCode));
    }
  }

  return encrypted.join('');
}

module.exports = caesarCipher;
