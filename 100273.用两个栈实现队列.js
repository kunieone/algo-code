/*
 * @lc app=leetcode.cn id=100273 lang=javascript
 *
 * [剑指 Offer 09] 用两个栈实现队列
 */

// @lc code=start

class CQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  /**
   * @param {number} value
   * @return {void}
   */
  appendTail(value) {
    // entry
    this.stack1.push(value);
  }
  /**
   * @return {number}
   */
  deleteHead() {
    if (this.stack2.length > 0) return this.stack2.pop();

    if (this.stack1.length === 0 && this.stack2.length === 0) return -1;

    while (this.stack1.length !== 0) {
      //   stack1栈顶的元素弹出并压入2栈;
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
// @lc code=end
