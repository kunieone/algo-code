/*
 * @lc app=leetcode.cn id=100309 lang=javascript
 *
 * [剑指 Offer 43] 1～n 整数中 1 出现的次数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne1 = function (n) {
  let count = 0;
  for (let i = 1; i <= n; i *= 10) {
    const divider = i * 10;
    count +=
      Math.floor(n / divider) * i +
      Math.min(Math.max(0, (n % divider) - i + 1), i);
  }
  return count;
};

function countDigitOne(n) {
  // 当 n 小于等于 0 时，不存在数字 1，返回 0
  if (n <= 0) {
    return 0;
  }

  // 将 n 转换成字符串，以便于提取每一位数字
  const str = n.toString();
  const len = str.length;
  const high = parseInt(str[0]); // 最高位的数字
  const low = parseInt(str.substring(1)); // 剩余低位组成的数

  // 如果 n 是个位数且为 0，则不存在数字 1，返回 0
  if (len === 1 && high === 0) {
    return 0;
  }

  // 如果 n 是个位数且不为 0，则存在一个数字 1，返回 1
  if (len === 1 && high > 0) {
    return 1;
  }

  let pow = Math.pow(10, len - 1); // 10 的幂次方
  let numOnes = 0; // 当前位上数字 1 出现的次数

  if (high > 1) {
    // 如果最高位大于 1，则当前位上数字 1 出现的次数是 pow（例如：3012 中千位上的 1 出现了 1000 次）
    numOnes += pow;
  } else if (high === 1) {
    // 如果最高位等于 1，则当前位上数字 1 出现的次数是 low + 1（例如：1512 中千位上的 1 出现了 513 次）
    numOnes += low + 1;
  }

  // 计算除去最高位之外的数字出现 1 的总次数（例如：在 1011 到 1999 中，百位数字 1 总共出现了 900 次）
  let remainingOnes = (high * (len - 1) * pow) / 10;

  // 递归地计算剩余低位中数字 1 出现的总次数（例如：在 1011 到 1919 中，十位和个位数字 1 总共出现了 110 次）
  return numOnes + remainingOnes + countDigitOne(low);
}

// @lc code=end
