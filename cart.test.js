const { calculateTotal } = require('./cart');

test('empty cart totals 0', () => {
  expect(calculateTotal([])).toBe(0);
});

test('one item at 100 totals 100', () => {
  expect(calculateTotal([{ price: 100 }])).toBe(100);
});

test('different items are added together', () => {
  expect(calculateTotal([{ price: 100 }, { price: 50 }])).toBe(150);
});
