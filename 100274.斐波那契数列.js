/*
 * @lc app=leetcode.cn id=100274 lang=javascript
 *
 * [剑指 Offer 10- I] 斐波那契数列
 */

// @lc code=start

/**
 *
 * @param {number} n
 * @return {number}
 */
var fib2 = function (n) {
  let a = 0n;
  let b = 1n;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a % (1000000000n + 7n);
};
const cache = new Map(); // memoization cache

function fib(n) {
  if (n < 2) {
    return BigInt(n);
  }
  if (cache.has(n)) {
    return cache.get(n);
  }
  const result = fib(n - 1) + fib(n - 2);
  cache.set(n, result);
  return result % (1000000000n + 7n);
}

// @lc code=end
