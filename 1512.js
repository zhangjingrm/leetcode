/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let maps = new Map();
  let indexs = new Set();
  nums.forEach((item) => {
    if (maps[item]) {
      maps[item] = maps[item] + 1;
      indexs.add(item);
    } else {
      maps[item] = 1;
    }
    // maps[item] = maps[item] ? maps[item] + 1 , indexs.add(item): 1;
  });
  let result = 0;
  for (var prop of indexs) {
    result += (maps[prop] * (maps[prop] - 1)) / 2;
  }
  return result;

  // let result = 0;
  // let current = -1;
  // let times = 1;
  // nums = nums.sort((a, b) => a - b);
  // nums.push(-1);
  // console.log(nums);
  // nums.forEach((item, index) => {
  //   if (current !== item) {
  //     current = item;
  //     result += (times * (times - 1)) / 2;
  //     times = 1;
  //   } else {
  //     times++;
  //   }
  // });
  // return result;
  // console.log(result);
};
numIdenticalPairs([1, 2, 3, 1, 1, 3]);
