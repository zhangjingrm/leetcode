/**
 * 递归
 * @param {*} n 
 */
function fibo(n) {
  if (n <= 0) return 0;
  if (n <= 1) return 1;
  var arr = [0, 1];
  for (var i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

/**
 * 64. 最小路径和
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (!grid || grid.length == 0 || grid[0].length == 0) {
    return 0;
  }
  let rows = grid.length;
  let columns = grid[0].length;
  let dp = Array.from(new Array(rows), () => new Array(columns).fill(0));

  dp[0][0] = grid[0][0];
  for (let i = 1; i < rows; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < columns; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (i = 1; i < rows; i++) {
    for (j = 1; j < columns; j++) {
      dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j];
    }
  }
  console.log(dp[rows - 1][columns - 1]);
  return dp[rows - 1][columns - 1];
};
// minPathSum([
//   [1, 3, 1],
//   [1, 5, 1],
//   [4, 2, 1],
// ]);

// ******************************************************************************

/**
 * 70. 爬楼梯
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 3) {
    return n;
  }

  let arr = [0, 1, 2];
  for (let i = 3; i < n + 1; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  // const calSteps = (n) => {
  //   if (n < 3) {
  //     return n;
  //   }
  //   return calSteps(n - 2) + calSteps(n - 1);
  // };
  return arr[n];
};
// climbStairs(5);

// ******************************************************************************

/**
 * 88. 合并两个有序数组
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < nums1.length; i++) {
    console.log(nums1, nums2);
    if (!nums2.length) {
      console.log(nums1, nums2, 222);
      return;
    }
    if (nums1[i] > nums2[0]) {
      nums1.splice(i, 0, nums2.shift());
      nums1.pop();
    }
  }
  if (nums2.length) {
    nums1.splice(nums1.length - nums2.length, nums2.length, ...nums2)
  }
  console.log(nums1, nums2, 111);
};
// merge([1, 5, 6, 0, 0, 0], 3, [2, 5, 6], 3);

