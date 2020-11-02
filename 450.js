/**
 * 453. 最小移动次数使数组元素相等
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let min = Math.min(...nums), result = 0;
  nums.forEach(item => result += item - min)
  console.log(result);
  return result
};
// minMoves([1, 1, 5]);

/**
 * 463. 岛屿的周长
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let num = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      console.log(grid[i][j]);
      if (grid[i][j] === 1) {
        // 左
        if (grid[i][j - 1] === 0 || grid[i][j - 1] === undefined) {
          num += 1;
        }
        // 右
        if (grid[i][j + 1] === 0 || grid[i][j + 1] === undefined) {
          num += 1;
        }
        // 上
        if ((grid[i - 1] !== undefined && grid[i - 1][j] === 0) || grid[i - 1] === undefined) {
          num += 1;
        }
        // 下
        if ((grid[i + 1] !== undefined && grid[i + 1][j] === 0) || grid[i + 1] === undefined) {
          num += 1;
        }
      }

    }
  }
  console.log(num);
  return num;
};
islandPerimeter([1, 2, 3, 4])