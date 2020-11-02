/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let target = [];
  index.forEach((item, i) => {
    target.splice(item, 0, nums[i]);
  });
  return target;
};

createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]);
