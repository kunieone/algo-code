/*
 * @lc app=leetcode.cn id=100347 lang=javascript
 *
 * [剑指 Offer 68 - II] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root;
  let l = lowestCommonAncestor(root.left, p, q);
  let r = lowestCommonAncestor(root.right, p, q);
  return l === null ? r : r === null ? l : root;
};
// @lc code=end
