/*
 * @lc app=leetcode.cn id=100275 lang=javascript
 *
 * [剑指 Offer 03] 数组中重复的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let s = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (s.has(nums[i])) {
      return nums[i];
    }
    s.add(nums[i]);
  }
  return null;
};
// @lc code=end
