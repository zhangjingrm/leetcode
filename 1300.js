/**
 * 1313-解压缩编码列表
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length - 1; i = i + 2) {
    const length1 = result.length;
    const length2 = length1 + nums[i];
    result.length = length2;
    result.fill(nums[i + 1], length1, length2);
  }
  return result;
};
// decompressRLElist([1, 2, 3, 4]);


// ******************************************************************************

/** 1342-
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  // let times = 0;
  // while (num !== 0) {
  //   times++;
  //   num = num % 2 === 0 ? num / 2 : num - 1;
  // }
  // return times;
  console.log(num.toString(2));
};

// numberOfSteps(0);

