/**
 * 1009. 十进制整数的反码
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function (N) {
  let count = 0, num = N;
  while (num > 1) {
    num = num % 2 === 0 ? num / 2 : (num - 1) / 2;
    count++;
  }
  // console.log(count, num);

  console.log(Math.pow(2, count + 1) - 1 - N);
  return Math.pow(2, count + 1) - 1 - N;
};

bitwiseComplement(10);