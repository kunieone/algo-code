/*
 * @lc app=leetcode.cn id=100302 lang=javascript
 *
 * [剑指 Offer 30] 包含min函数的栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.stack.unshift(x);
    if (this.minStack.length === 0) {
      this.minStack.unshift(x);
      return;
    } else if (this.minStack[0] >= x) {
      this.minStack.unshift(x);
    }
  }
  /**
   * @return {void}
   */
  pop() {
    if (this.minStack.length && this.minStack[0] === this.stack[0])
      this.minStack.shift();
    return this.stack.shift();
  }
  /**
   * @return {number}
   */
  top() {
    return this.stack[0];
  }
  /**
   * @return {number}
   */
  min() {
    return this.minStack.length === 0 ? Error("栈空!") : this.minStack[0];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
// @lc code=end
