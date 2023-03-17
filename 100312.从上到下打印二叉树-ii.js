/*
 * @lc app=leetcode.cn id=100312 lang=javascript
 *
 * [剑指 Offer 32 - II] 从上到下打印二叉树 II
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
 * @return {number[][]}
 */
var levelOrder2 = function (root) {
  let queue = [];
  let answer = [];
  if (root) queue.push(root);

  while (queue.length !== 0) {
    let len = queue.length;
    let tempArr = [];
    for (let i = 0; i < len; i++) {
      let nodes = queue.shift();
      tempArr.push(nodes.val);
      if (nodes.left) {
        queue.push(nodes.left);
      }
      if (nodes.right) {
        queue.push(nodes.right);
      }
    }
    answer.push(tempArr);
  }
  return answer;
};
var levelOrder = function (root) {
  let ans = [];
  const traverse = (node, level) => {
    if (!node) return;
    if (ans[level] === undefined) ans[level] = [];

    ans[level].push(node.val);
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  };

  traverse(root, 0);
  return ans;
};

// @lc code=end
