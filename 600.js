/**
 * 628. 三个数的最大乘积
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  const { length } = nums;
  return Math.max(nums[0] * nums[1] * nums[length - 1], nums[length - 1] * nums[length - 2] * nums[length - 3]);
};
maximumProduct([1, 2, 3, 4]);