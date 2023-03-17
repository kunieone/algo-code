/*
 * @lc app=leetcode.cn id=100277 lang=javascript
 *
 * [剑指 Offer 10- II] 青蛙跳台阶问题
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 0 1
// 1 2
// 2 3
var numWays = function (n) {
  if (n === 0n) return 1;
  let pre = 0n;
  let cur = 1n;
  for (let i = 0; i < n; i++) {
    let tmp = cur;
    cur = pre + cur;
    pre = tmp;
  }
  return cur % (1000000000n + 7n);
};
// @lc code=end
