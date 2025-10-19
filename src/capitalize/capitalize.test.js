const capitalize = require('./capitalize');

test('capitalize word', () => {
  expect(capitalize('richmond')).toBe('Richmond');
});
