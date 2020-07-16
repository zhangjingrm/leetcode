/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let arr = String(n).split("");
  let sum1 = arr.reduce(function (cal, cur) {
    return parseInt(cal) + parseInt(cur);
  }, 0);
  let sum2 = arr.reduce(function (cal, cur) {
    return cal * cur;
  }, 1);
  console.log(Math.abs(sum1 - sum2));
  return Math.abs(sum1 - sum2);
};

subtractProductAndSum(114);
