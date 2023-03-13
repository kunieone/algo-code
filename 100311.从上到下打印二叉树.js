/*
 * @lc app=leetcode.cn id=100311 lang=javascript
 *
 * [剑指 Offer 32 - I] 从上到下打印二叉树
 */

// @lc code=start

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  if (root === null) return [];
  const result = [];
  let currentLevel = [root];
  while (currentLevel.length > 0) {
    const nextLevel = [];
    const level = [];
    for (const node of currentLevel) {
      level.push(node.val);
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }

    result.push(level);
    currentLevel = nextLevel;
  }
  return result.flat();
};

var levelOrder = function (root) {
  if (root === null) return [];
  const cache = [[root]];

  for (let i = 0; i < cache.length; i++) {
    let nextLevel = [];
    for (let j = 0; j < cache[i].length; j++) {
      nextLevel.push(...selectChildren(cache[i][j]));
    }

    if (nextLevel.length !== 0) {
      cache.push(nextLevel);
    }
  }
  return cache.map((v) => v.map((vv) => vv.val)).flat();
};

var selectChildren = (node) => {
  let cache = [];
  if (node.left) cache.push(node.left);
  if (node.right) cache.push(node.right);
  return cache;
};

function test() {
  let t = new TreeNode(2);
  t.left = new TreeNode(4);
  t.left.left = new TreeNode(5);
  t.right = new TreeNode(3);

  console.log(levelOrder(t));
}
test();
//     2
//  1     3
//       4  8

[[2], [1, 3]];
// @lc code=end
