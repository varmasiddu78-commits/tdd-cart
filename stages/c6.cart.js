// Cycle 6 (green): validate input.
function calculateTotal(items, options = {}) {
  let total = 0;
  for (const item of items) {
    const qty = item.qty ?? 1;
    if (!Number.isInteger(qty) || qty < 1) {
      throw new Error('Quantity must be a positive whole number');
    }
    if (item.price < 0) {
      throw new Error('Price cannot be negative');
    }
    total += item.price * qty;
  }
  if (options.coupon === 'SAVE10') {
    total = total * 0.9;
  }
  if (options.gst) {
    total = total * 1.18;
  }
  return Math.round(total * 100) / 100;
}

module.exports = { calculateTotal };
