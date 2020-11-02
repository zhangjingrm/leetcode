/** 1266
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let sum = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let a = Math.abs(points[i + 1][0] - points[i][0]);
    let b = Math.abs(points[i + 1][1] - points[i][1]);
    sum += a > b ? a : b;
  }
  // console.log(sum);
  return sum;
};

// minTimeToVisitAllPoints([
//   [3, 2],
//   [-2, 2],
// ]);

// ******************************************************************************

/** 1281
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

// subtractProductAndSum(114);

// ******************************************************************************

/**
 * 1299. 将每个元素替换为右侧最大元素
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const { length } = arr;
  let result = new Array(length);
  result[length - 1] = -1;
  for (let i = length - 2; i > -1; i--) {
    result[i] = Math.max(arr[i + 1], result[i + 1]);
  }
  return result;
};

// replaceElements([17, 18, 3, 13, 6, 1, 7, 12, 8]);

// ******************************************************************************

/** 1295
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let result = 0;
  nums.forEach((item) => {
    if ((item + "").length % 2 === 0) {
      result++;
    }
  });
  return result;
};

// findNumbers([12, 345, 2, 6, 7896, 12, 9, 123, 10]);


