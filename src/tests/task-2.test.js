const stringLength = require('../task-2');

test('should return a reverse string', () => {
  expect(stringLength('Hello')).toBe('olleH');
});