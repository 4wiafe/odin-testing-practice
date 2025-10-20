const caesarCipher = require('./caesar-cipher');

describe('cipher methods', () => {
  test('basic shifting', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
  });
  test('wrapping around', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });
  test('case preservation', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });
  test('punctuation and spaces', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });
});
