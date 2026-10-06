// Cycle 5 (green): GST, applied after the discount, rounded to 2 decimals.
function calculateTotal(items, options = {}) {
  let total = 0;
  for (const item of items) {
    total += item.price * (item.qty ?? 1);
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
