function capitalize(word) {
  const splitWord = word.split('');
  const transformed = splitWord.map((letter, index) => {
    if (index === 0) {
      return letter.toUpperCase();
    }

    return letter;
  });

  return transformed.join('');
}

module.exports = capitalize;
