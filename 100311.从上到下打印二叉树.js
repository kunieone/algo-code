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

// @lc code=end

var levelOrder = function (root) {
  if (root === null) return [];
  const queue = [[root]];
  const ptr = 0;
  while (queue[ptr].length !== 0) {
    for (let ii = 0; ii < queue[ptr]; ii++) {
      const e = queue[ii];
      queue.push(selectChildren(e));
      ptr++;
    }
  }
  return queue;
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
