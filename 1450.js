/** 1450
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  let number = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      number++;
    }
  }
  return number;
};

busyStudent(
  [9, 8, 7, 6, 5, 4, 3, 2, 1],
  [10, 10, 10, 10, 10, 10, 10, 10, 10],
  5
);

/**
 * 1464-数组中两元素的最大乘积
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // const { length } = nums;
  // let result = -1;
  // for (let i = 0; i < length - 1; i++) {
  //   for (let j = i + 1; j < length; j++) {
  //     if ((nums[i] - 1) * (nums[j] - 1) > result) {
  //       result = (nums[i] - 1) * (nums[j] - 1);
  //     }
  //   }
  // }
  // console.log(result);

  // nums = nums.sort((a, b) => {
  //   return a - b;
  // });

  // return (nums[length - 1] - 1) * (nums[length - 2] - 1);

  let a = Math.max(...nums);
  nums.splice(nums.indexOf(a), 1);
  let b = Math.max(...nums);
  console.log((a - 1) * (b - 1));
  return (a - 1) * (b - 1);
};

maxProduct([1, 5, 4, 5]);


/** 1470
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[i + n]);
  }
  return result;
};

shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4);


/**
 * 1480
 * @param {*} nums 
 */
var runningSum = function (nums) {
  var sum = [];
  var numsSum = nums.reduce(function (accumulator, current) {
    sum.push(accumulator);
    return accumulator + current;
  });
  sum.push(numsSum);
  return sum;
};

runningSum([3, 1, 2, 10, 1]);

/**
 * 1486
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let result = null;
  for (let i = 0; i < n; i++) {
    result = result === null ? start + 2 * i : result ^ (start + 2 * i);
  }
  console.log(n, start, result);
  // return result;
};

xorOperation(1, 0);
xorOperation(2, 0);
xorOperation(3, 0);
xorOperation(4, 0);
xorOperation(5, 0);


/**
 * 1496
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

