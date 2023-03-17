/*
 * @lc app=leetcode.cn id=100342 lang=javascript
 *
 * [剑指 Offer 55 - II] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  return checkBalance(root).balanced;
};
const checkBalance = (root) => {
  if (!root) {
    return { height: 0, balanced: true };
  }
  const left = checkBalance(root.left);
  const right = checkBalance(root.right);
  const height = 1 + Math.max(left.height, right.height);
  const balanced =
    left.balanced &&
    right.balanced &&
    Math.abs(left.height - right.height) <= 1;
  return { height, balanced };
};
// @lc code=end
