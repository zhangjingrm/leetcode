/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  var sortResult = nums.sort(function (a, b) {
    return b - a;
  });
  return sortResult[k - 1];
};

findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
