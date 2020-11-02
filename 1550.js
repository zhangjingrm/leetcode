/**
 * 1550. 存在连续三个奇数的数组
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      num += 1;
    } else {
      num = 0;
    }
    if (num >= 3) {
      console.log(24);
      return true;
    }
  }
  console.log(num);
  return false;
};
// threeConsecutiveOdds([1, 1, 2, 3, 4, 5, 7, 23]);

//***************************************************************************** */

/**
 * 1588. 所有奇数长度子数组的和
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  const { length } = arr;
  // console.log(length);
  let num = 0;
  for (let i = 0; i < length; i++) {
    num += arr[i]
    for (let j = i + 1; j < length; j++) {
      if ((j - i) % 2 == 0) { // 符合条件
        console.log(i, j);
        for (let k = i; k <= j; k++) {
          console.log(k, arr[k])
          num += arr[k];
        }
      }
    }
  }
  console.log(num);

};

// sumOddLengthSubarrays([10,11,12])