/**
 * 1351. 统计有序矩阵中的负数
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let times = 0;
  if (!grid.length) return times;
  for (let i = 0; i < grid.length; i++) {
    if (grid[i][0] < 0) {
      times += (grid.length - i) * grid[0].length;
      break;
    }
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] < 0) {
        times += grid[0].length - j;
        break;
      }
    }
  }
  // console.log(times);
  return times;
};

countNegatives([
  [1, -1],
  [-1, -1],
]);

/** 1365
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const { length } = nums;
  let result = Array(length);
  result.fill(0);
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      console.log(i, j);
      if (nums[j] < nums[i]) {
        result[i]++;
      }
      if (nums[i] < nums[j]) {
        result[j]++;
      }
    }
  }
  return result;
};

smallerNumbersThanCurrent([6, 5, 4, 8]);

/** 1389
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let target = [];
  index.forEach((item, i) => {
    target.splice(item, 0, nums[i]);
  });
  return target;
};

createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]);


