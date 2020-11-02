/**
 * 367. 有效的完全平方数
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {};

// isPerfectSquare(1312);

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let sortArr = [].concat(...matrix).sort(function (a, b) {
    return a - b;
  });
  return sortArr[k - 1];
};

// kthSmallest(
//   [
//     [1, 3, 7],
//     [2, 4, 8],
//     [3, 5, 9],
//   ],
//   8
// );

/**
 * 392. 判断子序列
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (!s) return true;
  if (!t) return false;
  const arrS = [...s];
  const arrT = [...t];
  const { length } = arrT;
  let startT = 0;
  let flag = true;
  for (let i = 0; i < arrS.length; i++) {
    if (startT === length) return false;
    while (startT < length) {
      if (arrS[i] === arrT[startT]) {
        startT++;
        break;
      }
      startT++;
      if (startT === length) return false;
    }
  }
  return flag;
};

// console.log(isSubsequence("acb", "ahbgdc"));

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {};



