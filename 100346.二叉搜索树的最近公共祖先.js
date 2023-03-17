/*
 * @lc app=leetcode.cn id=100346 lang=javascript
 *
 * [剑指 Offer 68 - I] 二叉搜索树的最近公共祖先
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
var lowestCommonAncestor2 = function (root, p, q) {
  let ancestor = root;
  while (ancestor) {
    if (p.val < ancestor.val && q.val < ancestor.val) {
      ancestor = ancestor.left;
    } else if (p.val > ancestor.val && q.val > ancestor.val) {
      ancestor = ancestor.right;
    } else {
      return ancestor;
    }
  }
};
var lowestCommonAncestor = function (root, p, q) {
  if (root == null) return null;
  if (p.val === q.val) return p;
  while (root) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left;
      lowestCommonAncestor(root, p, q);
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right;
      lowestCommonAncestor(root, p, q);
    } else {
      return root;
    }
  }
};
// @lc code=end
