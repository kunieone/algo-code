/*
 * @lc app=leetcode.cn id=100308 lang=javascript
 *
 * [剑指 Offer 38] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (str) {
  let sequences = [];
  let res = [];
  const dfs = (s, start) => {
    if (start === s.length - 1) {
      res.push(s);
      return;
    }
    let st = new Set();
    for (let i = start; i < s.length; i++) {
      if (st.has(s[i])) continue; // skip repeated characters
      st.add(s[i]);
      let arr = [...s]; // convert string to strCopyay for swapping
      [arr[i], arr[start]] = [arr[start], arr[i]]; // swap elements
      dfs(arr.join(""), start + 1); // recursively fix next position
    }
  };
  dfs(str, 0);
  return res;
};

// @lc code=end
