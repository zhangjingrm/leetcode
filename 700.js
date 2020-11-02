/**
 * 709. 转换成小写字母
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  // let arr = [...str];
  // arr = arr.map((item) => {
  //   if (item.charCodeAt() <= 90 && item.charCodeAt() >= 65) {
  //     return String.fromCharCode(item.charCodeAt() + 32);
  //   }
  //   return item;
  // });
  // return arr.join("");

  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    result +=
      code >= 65 && code <= 90 ? String.fromCharCode(code + 32) : str[i];
  }
  return result;
};

// toLowerCase("Hello");

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  var result = [],
    arr = [];

  for (let i = 0; i < A.length; i++) {
    findAllIndex(B, A[i]).forEach((item) => {});
  }
};


/**
 * 746. 使用最小花费爬楼梯
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  
};
