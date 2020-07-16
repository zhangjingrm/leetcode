/**
 * 查找数组中所有存在元素的下表
 * @param {*} arr
 * @param {*} tag
 */
function findAllIndex(arr, tag) {
  let result = [];

  arr.forEach(function (ele, index) {
    if (ele === tag) result.push(index);
  });
  return result;
}

findAllIndex([1, 2, 4, 3, 1, 2, 1], 1);
