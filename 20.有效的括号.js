/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const stack = [];
  const openToClose = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] in openToClose) {
      stack.push(s[i]);
    } else {
      const lastOpened = stack.pop();
      if (openToClose[lastOpened] !== s[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// @lc code=end
