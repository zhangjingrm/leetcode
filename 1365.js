/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const { length } = nums;
  let result = Array(length);
  result.fill(0);
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      console.log(i, j);
      if (nums[j] < nums[i]) {
        result[i]++;
      }
      if (nums[i] < nums[j]) {
        result[j]++;
      }
    }
  }
  return result;
};

smallerNumbersThanCurrent([6, 5, 4, 8]);
