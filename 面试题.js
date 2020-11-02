/**
 * 面试题 08.01. 三步问题
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else if (n === 3) {
    return 4;
  } else {
    let arr = [1, 2, 4];
    for (let i = 3; i < n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
    }
    return arr[n - 1];
  }
};
// waysToStep(6);

/**
 * 面试题 08.03. 魔术索引
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === i) {
      return i;
    }
  }
  return -1;
};
// console.log(findMagicIndex([1, 1, 1, 2, 4]));

/**
 * 面试题 08.11. 硬币
 * @param {number} n
 * @return {number}
 */
var waysToChange = function (n) {
  if (n % 50 === 0) {
    console.log(111);
  } else if (n % 25 === 0 || n % 10 === 0) {
    console.log(222);
  } else if (n % 5 === 0) {
    console.log(333);
  } else {
    return 1;
  }
};

/**
 * 面试题 16.17. 连续数列
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i] + nums[i - 1], nums[i]);
  }
  console.log(nums);
  return Math.max(...nums);
};
// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

/**
 * 面试题 17.10. 主要元素
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let maps = {};
  nums.forEach(item => {
    maps[item] = maps[item] === undefined ? 1 : maps[item] + 1;
  });
  console.log(maps);
  for (let item in maps) {
    console.log(item);
    if (maps[item] > nums.length / 2) {
      return item;
    }
  }
  return -1;
};
majorityElement([1, 2, 5, 9, 5, 9, 5, 5, 5]);

/**
 * 面试题 17.16. 按摩师
 * @param {number[]} nums
 * @return {number}
 */
var massage = function (nums) {
  const { length } = nums;
  if (!length) return 0;
  if (length === 1) return nums[0];
  if (length === 2) return Math.max(...nums);
  nums[1] = nums[0] > nums[1] ? nums[0] : nums[1];
  for (let i = 2; i < length; i++) {
    nums[i] = Math.max(nums[i - 2] + nums[i], nums[i - 1]);
  }
  console.log(nums);
  return nums[length - 1];
};
// massage([2, 1, 4, 5, 3, 1, 1, 3]);
