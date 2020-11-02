/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  nums = nums.sort(function (a, b) {
    return a - b;
  });
  console.log(nums);
  let dup = -1;
  let missing = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      dup = nums[i];
    } else if (nums[i] > nums[i - 1] + 1) {
      missing = nums[i - 1] + 1;
    }
  }
  return [dup, nums[nums.length - 1] != nums.length ? nums.length : missing];
};
findErrorNums([37, 62, 43, 27, 12, 66, 36, 18, 39, 54, 61, 65, 47, 32, 23, 2, 46, 8, 4, 24, 29, 38, 63, 39, 25, 11, 45, 28, 44, 52, 15, 30, 21, 7, 57, 49, 1, 59, 58, 14, 9, 40, 3, 42, 56, 31, 20, 41, 22, 50, 13, 33, 6, 10, 16, 64, 53, 51, 19, 17, 48, 26, 34, 60, 35, 5]);