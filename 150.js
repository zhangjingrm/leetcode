/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // numbers = numbers.filter((item) => {
  //   return item <= target;
  // });
  let length = numbers.length;
  for (let i = 0; i < length; i++) {
    for (let j = length - 1; j > i; j--) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
};

// console.log(twoSum([-1, 0], -1));

/**
 * 198. 打家劫舍
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  // let result = [];
  // result[0] = nums[0];
  // result[1] = Math.max(nums[0], nums[1]);
  // for (let i = 2; i < nums.length; i++) {
  //   result[i] = Math.max(result[i - 2] + nums[i], result[i - 1]);
  // }
  // console.log(result[nums.length - 1]);
  // return result[nums.length - 1];

  let first = nums[0];
  let second = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    let temp = second;
    second = Math.max(first + nums[i], second);

    first = temp;
  }
  console.log(second);
  return second;
};

// rob([1, 2, 9, 7, 1, 10, 2]);

