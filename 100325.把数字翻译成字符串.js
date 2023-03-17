/*
 * @lc app=leetcode.cn id=100325 lang=javascript
 *
 * [剑指 Offer 46] 把数字翻译成字符串
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
function translateNum(num) {
  const str = num.toString();
  const dp = new Array(str.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= str.length; i++) {
    const lastTwoDigits = parseInt(str.slice(i - 2, i), 10);
    if (lastTwoDigits >= 10 && lastTwoDigits <= 25) {
      // 、 1
      // 1  1
      // 12   1/2 12   2种
      // 121  1/21 1/2/1 12/1 3种

      dp[i] = dp[i - 1] + dp[i - 2];
    } else {
      dp[i] = dp[i - 1];
    }
  }
  return dp[str.length];
}

// @lc code=end
