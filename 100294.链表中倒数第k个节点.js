/*
 * @lc app=leetcode.cn id=100294 lang=javascript
 *
 * [剑指 Offer 22] 链表中倒数第k个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let result = null;
  const helper = function (node) {
    if (node === null) {
      // 到达链表尾部时返回 0
      return 0;
    }
    const index = helper(node.next) + 1; // 递归向后遍历，并计算节点的索引值
    if (index === k) {
      // 如果当前节点是倒数第 k 个节点，则更新 result
      result = node;
    }
    return index; // 返回节点的索引值
  };
  helper(head);
  return result;
};

// @lc code=end
