/*
 * @lc app=leetcode.cn id=100315 lang=javascript
 *
 * [剑指 Offer 33] 二叉搜索树的后序遍历序列
 */

// @lc code=start
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  if (!postorder || postorder.length <= 1) {
    return true;
  }
  let root = postorder.pop();
  // 从左边开始一个一个找到比根大的元素的位置。
  let i = 0;

  while (postorder[i] < root) {
    i++;
  }

  if (postorder.slice(i).some((v) => v < root)) return false;
  return (
    verifyPostorder(postorder.slice(0, i)) &&
    verifyPostorder(postorder.slice(i))
  );
};

// @lc code=end
/* 
1 3 2 | 6 | 5




1 | 6 3 2 | 5 



 6 3  | 2 

  6 2


    2
      6



      2 6



      6
    2


    3
2     6

//  */
