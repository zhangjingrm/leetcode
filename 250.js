/**
 * 279. 完全平方数
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const isSquare = (num) => {
    let b = Math.trunc(Math.sqrt(num));
    return num === b * b;
  }
  let a = Math.trunc(Math.sqrt(n));
  if (n === a * a) {
    return 1;
  }
  for (let i = 1; i * i <= n; ++i) {
    if (isSquare(n - i * i)) {
      return 2;
    }
  }
  while (n % 4 === 0) {
    n = n / 4;
  }
  if (n % 8 === 7) {
    return 4;
  }
  return 3;
};
// console.log(numSquares(12));

/**
 * 292. Nim 游戏
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  if (n % 4 ===  0) {
    return false;
  }
  return true;
};
