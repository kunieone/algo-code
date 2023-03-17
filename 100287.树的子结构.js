/*
 * @lc app=leetcode.cn id=100287 lang=javascript
 *
 * [剑指 Offer 26] 树的子结构
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
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */

function isSubStructure(A, B) {
  if (!A || !B) return false;
  function isSubTree(A, B) {
    if (!B) return true;
    if (!A || A.val !== B.val) return false;
    return isSubTree(A.left, B.left) && isSubTree(A.right, B.right);
  }

  return (
    isSubTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
  );
}

// @lc code=end
