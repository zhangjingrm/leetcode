/**
 * 斐波拉契数列
 * @param {*} n
 */
function fibo(n) {
  if (n <= 0) return 0;
  if (n <= 1) return 1;
  var arr = [0, 1];
  for (var i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

/*-----303. 区域和检索 - 数组不可变-------*/
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  const { length } = nums;
  this.sumArr = new Array(length);
  this.sumArr[0] = nums[0];
  for (let i = 1; i < length; i++) {
    this.sumArr[i] = nums[i] + this.sumArr[i - 1];
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  if (i === 0) return this.sumArr[j];
  return this.sumArr[j] - this.sumArr[i - 1];
};

// NumArray([-2, 0, 3, -5, 2, -1]);

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
/*-----303. 区域和检索 - 数组不可变-------*/

/**
 * 343. 整数拆分
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  const dp = new Array(n + 1).fill(1);
  if (n === 2 || n === 1) {
    return 1;
  }
  let max = 0;

  for (let i = 3; i <= n; i++) {
    for (let i = 3; i <= n; ++i) {
      for (let j = 1; j < i; ++j) {
        dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
      }
    }
  }
  console.log(dp[n]);
  return dp[n];
};

// integerBreak(31);

// ******************************************************************************
/**
 * 349. 两个数组的交集
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let arr = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        arr.push(nums1[i])
      }
    }
  }
  console.log([...new Set(arr)])
  return [...new Set(arr)]
};
intersection([1, 2, 2, 1], [2, 3])
