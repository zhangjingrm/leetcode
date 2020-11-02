/**
 * 1299. 将每个元素替换为右侧最大元素
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const { length } = arr;
  let result = new Array(length);
  result[length - 1] = -1;
  for (let i = length - 2; i > -1; i--) {
    result[i] = Math.max(arr[i + 1], result[i + 1]);
  }
  return result;
};

replaceElements([17, 18, 3, 13, 6, 1, 7, 12, 8]);
