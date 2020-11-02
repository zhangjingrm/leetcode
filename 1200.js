/**
 * 1207. 独一无二的出现次数
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map = {};
  arr.forEach(item => {
    if (map[item] == undefined) {
      map[item] = 1;
    } else {
      map[item] = map[item] + 1;
    }
  });
  let arr1 = Object.values(map);
  const set = new Set(arr1);
  return arr1.length === [...set].length
};
uniqueOccurrences([1, 2, 2, 1, 1, 3])