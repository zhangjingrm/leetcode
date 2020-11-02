/**
 * 977. 有序数组的平方
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  let arr = A.map(item => {
    return item * item;
  });
  return arr.sort(function (a, b) {
    return a - b;
  });
};
sortedSquares([-4, -1, 0, 3, 10]);

/**
 * 976. 三角形的最大周长
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function (A) {
  let arr = A.sort((a, b) => b - a);
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] < arr[i + 1] + arr[i + 2]) {
      return arr[i] + arr[i + 1] + arr[i + 2];
    }
  }
  return 0;
};
// largestPerimeter([3, 6, 2, 3]);
