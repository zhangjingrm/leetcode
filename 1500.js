/**
 * 1502. 判断能否形成等差数列
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  // console.log(arr);
};
canMakeArithmeticProgression([3, 5, 1]);

/**
 * 冒泡排序
 * @param {*} arr
 */
var bubbleSort = function (arr) {
  let { length } = arr;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
};

// bubbleSort([3, 38, 5, 44, 15]);

/**
 * 快速排序
 * @param {*} arr
 */
var quickSort = function (arr) {
  const { length } = arr;
  if (length <= 1) return arr;
  let pivotIndex = Math.floor(length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  for (var i = 0; i < length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};

// console.log(quickSort([85, 24, 63, 45, 17, 31, 96, 50]));

var insertionSort = function (arr) {
  let { length } = arr;
  let current;
  for (let i = 0; i < length; i++) {
    current = arr[i];
  }
};

/**
 * 1512
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

/**
 * 1520
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  if ((high - low) % 2 === 0) { // 两个数都为基数或者都为偶数
    if (low % 2 === 0) {
      return (high - low) / 2;
    } else {
      return (high - low + 2) / 2;
    }
  } else {
    return (high - low + 1) / 2;
  }
};