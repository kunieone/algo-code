/*
 * @lc app=leetcode.cn id=100331 lang=javascript
 *
 * [剑指 Offer 53 - II] 0～n-1中缺失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  //   可以发现这个代码可以有O(log(n))复杂度的算法。
  //   对于完整的0开始的数组，则arr[n] = n 恒成立
  //   如果一个数组：
  //                arr= [0,1,2,3,5,6,7,8,9,10]
  //                      0 1 2 3 4 5       9
  //                              X
  //   首先最后一个arr[last]===last 恒不成立。
  //   那么我二分开始：
  //   arr[n~/2]是否等于n~/2 (~/代表向下取整)
  //   如果成立，说明错误只会出现在左边
  //   如果不成立,那么错误只会出现在右边
  return helper(nums, 0, nums.length);
};

function helper(nums, start, end) {
  if (start === end) {
    return start;
  }
  let mid = Math.floor((end + start) / 2);

  return nums[mid] !== mid
    ? helper(nums, start, mid)
    : helper(nums, mid + 1, end);
}
