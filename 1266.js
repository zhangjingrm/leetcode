/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let sum = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let a = Math.abs(points[i + 1][0] - points[i][0]);
    let b = Math.abs(points[i + 1][1] - points[i][1]);
    sum += a > b ? a : b;
  }
  // console.log(sum);
  return sum;
};

minTimeToVisitAllPoints([
  [3, 2],
  [-2, 2],
]);
