/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let result = 0;
  nums.forEach((item) => {
    if ((item + "").length % 2 === 0) {
      result++;
    }
  });
  return result;
};

findNumbers([12, 345, 2, 6, 7896, 12, 9, 123, 10]);
