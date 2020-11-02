/**
 * 剑指 Offer 11. 旋转数组的最小数字
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let i = 0;
  const { length } = numbers;
  while (i < length - 1) {
    if (numbers[i] <= numbers[i + 1]) {
      i++;
    } else {
      return numbers[i + 1];
    }
  }
  return numbers[0];
};

// minArray([2, 2, 2, 0, 1]);

/**
 * 剑指 Offer 42. 连续子数组的最大和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i] + nums[i - 1], nums[i]);
  }
  return Math.max(...nums);
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
