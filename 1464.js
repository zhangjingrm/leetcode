/**
 * 数组中两元素的最大乘积
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
