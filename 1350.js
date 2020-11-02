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
