// Cycle 3 (green): quantity, defaulting to 1.
function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price * (item.qty ?? 1);
  }
  return total;
}

module.exports = { calculateTotal };
