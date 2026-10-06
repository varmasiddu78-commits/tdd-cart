// Cycle 2 (green): sum the prices.
function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price;
  }
  return total;
}

module.exports = { calculateTotal };
