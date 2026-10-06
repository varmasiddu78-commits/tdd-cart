# TDD Kata: Shopping Cart Price Calculator

Assignment 15: Test-Driven Development kata (Red -> Green -> Refactor).

## Rules the cart must follow
1. Empty cart totals 0
2. Item prices are added up
3. `qty` multiplies the price (default 1)
4. Coupon `SAVE10` gives 10% off (unknown coupons are ignored)
5. 18% GST is added after the discount, rounded to 2 decimals
6. Invalid input throws an error (qty not a positive whole number, negative price)

## Setup (once)
```bash
npm install          # installs jest
git init
git add package.json step.sh stages README.md .gitignore
git commit -m "chore: project setup and kata stages"
```

## For EACH cycle N = 1..6
```bash
./step.sh N test     # 1. put the new test in place
npx jest             # 2. RED  -> screenshot the failure
git add -A && git commit -m "test: cycle N <what> (red)"

./step.sh N code     # 3. put the minimum code in place
npx jest             # 4. GREEN -> screenshot the pass
git add -A && git commit -m "feat: cycle N <what> (green)"
```
Suggested messages:
| N | what |
|---|------|
| 1 | empty cart totals 0 |
| 2 | sum item prices |
| 3 | quantity |
| 4 | SAVE10 coupon |
| 5 | GST and rounding |
| 6 | input validation |

## Refactor
```bash
./step.sh final
npx jest                         # still GREEN -> screenshot
git add -A && git commit -m "refactor: extract helpers and constants"
```

## Evidence for the report
```bash
npx jest --coverage    # screenshot the coverage table
git log --oneline      # screenshot the commit history
```
Push to GitHub and paste the link in your report.

> Tip: type each test yourself first if you have time. The files in `stages/` are there so you can copy exact versions when you get stuck. Don't skip the RED screenshot: a test that never failed proves nothing.
