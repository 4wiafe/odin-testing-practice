const calculator = require('./calculator');

describe('calculator operations', () => {
  test("adds 1 and 3 to equal 4", () => {
    expect(calculator.add(1, 3)).toEqual(4);
  });

  test("subtracts 2 from 5 to equal 3", () => {
    expect(calculator.subtract(5, 2)).toEqual(3);
  });

  test("multiplies 5 by 2 to equal 10", () => {
    expect(calculator.multiply(5, 2)).toEqual(10);
  });
  
  test("divide 10 by 2 to be close to 5", () => {
    expect(calculator.divide(10, 2)).toBeCloseTo(5);
  });
});
