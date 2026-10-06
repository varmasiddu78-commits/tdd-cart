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

test('quantity multiplies the price: 2 x 50 = 100', () => {
  expect(calculateTotal([{ price: 50, qty: 2 }])).toBe(100);
});

test('mixed items with and without qty', () => {
  expect(calculateTotal([{ price: 50, qty: 3 }, { price: 20 }])).toBe(170);
});

test('coupon SAVE10 gives 10% off', () => {
  expect(calculateTotal([{ price: 100 }], { coupon: 'SAVE10' })).toBe(90);
});

test('an unknown coupon is ignored', () => {
  expect(calculateTotal([{ price: 100 }], { coupon: 'FAKE99' })).toBe(100);
});

test('18% GST is added on top: 100 -> 118', () => {
  expect(calculateTotal([{ price: 100 }], { gst: true })).toBe(118);
});

test('discount is applied first, then GST: 100 -> 90 -> 106.2', () => {
  expect(calculateTotal([{ price: 100 }], { coupon: 'SAVE10', gst: true })).toBe(106.2);
});

test('result is rounded to 2 decimals', () => {
  expect(calculateTotal([{ price: 99.99 }], { gst: true })).toBe(117.99);
});
