// Cycle 4 (green): discount coupon.
function calculateTotal(items, options = {}) {
  let total = 0;
  for (const item of items) {
    total += item.price * (item.qty ?? 1);
  }
  if (options.coupon === 'SAVE10') {
    total = total * 0.9;
  }
  return total;
}

module.exports = { calculateTotal };
