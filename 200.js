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

// findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);

// ******************************************************************************

/**
 * 219. 存在重复元素 II
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // 两次循环
  const { length } = nums;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < Math.min(i + k + 1, length); j++) {
      if (nums[i] === nums[j]) {
        console.log(123);
        return true;
      }
    }
  }
  console.log(456);
  return false;
};
// containsNearbyDuplicate([1, 2, 3, 1,2,3], 2)

// ******************************************************************************
/**
 * 228. 汇总区间
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let arr = [];
  let str = '';
  for (let i = 0; i < nums.length + 1; i++) {
    if (!str) {
      str = `${nums[i]}`;
    } else {
      if (nums[i] - nums[i - 1] !== 1) {
        nums[i - 1] === parseInt(str) ? arr.push(str) : arr.push(`${str}->${nums[i - 1]}`);
        str = `${nums[i]}`;
      }
    }
  }
  console.log(str);
  console.log(arr);
  return arr;
};
summaryRanges([0])
