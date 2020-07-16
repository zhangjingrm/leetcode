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

kthSmallest(
  [
    [1, 3, 7],
    [2, 4, 8],
    [3, 5, 9],
  ],
  8
);
