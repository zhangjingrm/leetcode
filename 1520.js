/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  if ((high - low) % 2 === 0) { // 两个数都为基数或者都为偶数
    if (low % 2 === 0) {
      return (high - low) / 2;
    } else {
      return (high - low + 2) / 2;
    }
  } else {
    return (high - low + 1) / 2;
  }
};