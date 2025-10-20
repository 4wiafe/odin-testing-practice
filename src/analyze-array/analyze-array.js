const analyzeArray = function (array) {
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  const average = sum / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;

  return {
    average,
    min,
    max,
    length
  };
}

module.exports = analyzeArray;
