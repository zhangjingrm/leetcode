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
