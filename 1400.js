/** 1431
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  var max = Math.max(...candies);
  var result = [];
  candies.forEach((item) => {
    result.push(item >= max - extraCandies);
  });
  return result;
};

kidsWithCandies([12, 1, 12], 10);


/**
 * 1436-旅行终点站
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let obj = {};
  let result = paths[0][1];
  let flag = true;
  paths.forEach((item) => {
    obj[item[0]] = item[1];
  });
  while (flag) {
    if (obj[result]) {
      result = obj[result];
    } else {
      flag = false;
    }
  }

  for (let i = 0; i < paths.length; i++) {
    obj[paths[i][0]] = paths[i][1];
  }

  console.log(123);

  return result;
};

destCity([
  ["London", "New York"],
  ["New York", "Lima"],
  ["Lima", "Sao Paulo"],
]);
