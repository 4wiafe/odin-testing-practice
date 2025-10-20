const analyzeArray = require('./analyze-array');

test("returns correct stats for a simple array", () => {
  expect(analyzeArray([1, 2])).toEqual({
    average: 1.5,
    min: 1,
    max: 2,
    length: 2,
  });
});
