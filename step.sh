#!/usr/bin/env bash
# Usage:
#   ./step.sh 3 test   -> puts the cycle-3 TEST in place  (run jest: RED)
#   ./step.sh 3 code   -> puts the cycle-3 CODE in place  (run jest: GREEN)
#   ./step.sh final    -> puts the refactored code in place (still GREEN)
set -e
if [ "$1" = "final" ]; then
  cp stages/final.cart.js cart.js
  echo "Refactored cart.js copied. Now run: npx jest"
  exit 0
fi
N="$1"; WHAT="$2"
if [ "$WHAT" = "test" ]; then
  cp "stages/c${N}.test.js" cart.test.js
  echo "Cycle $N test copied to cart.test.js. Now run: npx jest   (expect RED)"
elif [ "$WHAT" = "code" ]; then
  cp "stages/c${N}.cart.js" cart.js
  echo "Cycle $N code copied to cart.js. Now run: npx jest   (expect GREEN)"
else
  echo "Usage: ./step.sh <1-6> test|code   or   ./step.sh final"; exit 1
fi
