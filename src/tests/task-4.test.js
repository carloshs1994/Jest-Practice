const capitalize = require('../task-4');

test('should return the same String but with the first character capitalized.', () => {
  expect(capitalize('carlos')).toBe('Carlos');
});
