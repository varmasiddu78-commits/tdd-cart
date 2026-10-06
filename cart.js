// Refactor: same behaviour, cleaner structure. All tests stay green.
const GST_RATE = 0.18;
const COUPONS = { SAVE10: 0.1 }; // code -> discount fraction

function validateItem({ price, qty = 1 }) {
  if (!Number.isInteger(qty) || qty < 1) {
    throw new Error('Quantity must be a positive whole number');
  }
  if (price < 0) {
    throw new Error('Price cannot be negative');
  }
}

function lineTotal({ price, qty = 1 }) {
  return price * qty;
}

function applyCoupon(amount, coupon) {
  const discount = COUPONS[coupon] ?? 0;
  return amount * (1 - discount);
}

function applyGst(amount) {
  return amount * (1 + GST_RATE);
}

function roundToPaise(amount) {
  return Math.round(amount * 100) / 100;
}

function calculateTotal(items, { coupon, gst = false } = {}) {
  items.forEach(validateItem);

  let total = items.reduce((sum, item) => sum + lineTotal(item), 0);
  total = applyCoupon(total, coupon);
  if (gst) {
    total = applyGst(total);
  }
  return roundToPaise(total);
}

module.exports = { calculateTotal };
