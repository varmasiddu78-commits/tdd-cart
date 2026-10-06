const { calculateTotal } = require('./cart');

test('empty cart totals 0', () => {
  expect(calculateTotal([])).toBe(0);
});
