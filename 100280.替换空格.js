/*
 * @lc app=leetcode.cn id=100280 lang=javascript
 *
 * [剑指 Offer 05] 替换空格
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  return s.replace(/\s/g, "%20");
};
// @lc code=end
