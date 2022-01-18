const stringLength = require('../task-1');
const testVariable = 'Carlos';

test('Returns the length of a given string', () => {
  expect(stringLength(testVariable)).toBe(6);
});

test('Check if the length of the string is greater than 0 and less than 10', () => {
  expect(stringLength(testVariable)).toBeGreaterThan(0);
  expect(stringLength(testVariable)).toBeLessThan(10);
});