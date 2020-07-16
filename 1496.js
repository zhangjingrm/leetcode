/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  let maps = {
    N: [0, 1],
    S: [0, -1],
    E: [1, 0],
    W: [-1, 0],
  };
  let arr1 = [], // 横坐标的集合
    arr2 = [], // 纵坐标的集合
    flag = false;
  var sum = path.split("").reduce(
    function (cal, cur) {
      arr1.push(cal[0]);
      arr2.push(cal[1]);

      let nowX = cal[0] + maps[cur][0],
        nowY = cal[1] + maps[cur][1];

      let index = arr1.indexOf(nowX);
      if (index > -1 && arr2[index] === nowY) {
        flag = true;
      }

      return [nowX, nowY];
    },
    [0, 0]
  );

  debugger;
  let index1 = arr1.indexOf(sum[0]);
  if (index1 > -1 && arr2[index1] === sum[1]) {
    flag = true;
  }

  console.log(arr1, arr2, sum, flag);
};

isPathCrossing("NENWS");
