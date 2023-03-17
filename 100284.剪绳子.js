/*
 * @lc app=leetcode.cn id=100284 lang=javascript
 *
 * [剑指 Offer 14- I] 剪绳子
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  // dp
  let m = Math.max;
  let dp = Array.from({ length: n + 1 }, () => 0);

  for (let i = 2; i <= n; i++) {
    let curMax = 0;
    for (let j = 1; j < i; j++) {
      curMax = m(curMax, m(j * (i - j), j * dp[i - j]));
    }
    dp[i] = curMax;
  }
  return dp[n];
};
// @lc code=end
