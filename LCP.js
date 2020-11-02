/**
 * LCP 01. 猜数字
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function (guess, answer) {
  let times = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      times++;
    }
  }
  console.log(times);
  return times;
};
// game([2, 2, 3], [1, 2, 3]);

/**
 * LCP 02. 分式化简
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function (cont) {
  let { length } = cont;
  if (length === 1) {
    return [...cont, 1];
  }
  let x = 1;
  let y = cont[length - 1];
  for (let i = length - 2; i > 0; i--) {
    let tag = x;
    x = y;
    y = y * cont[i] + tag;
  }
  x = cont[0] * y + x;
  // console.log(x, y);
  return [x, y];
};
// fraction([3]);

/**
 * LCP 06. 拿硬币
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
  let nums = 0;
  coins.forEach((item) => {
    if (item <= 2) {
      nums += 1;
    } else {
      nums += item % 2 === 0 ? item / 2 : (item + 1) / 2;
    }
  });
  console.log(nums);
  return nums;
};
// minCount([4, 2, 1]);

/**
 * LCP 07. 传递信息
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
  // 方法1
  // let obj = {};
  // relation.forEach((item) => {
  //   obj[item[0]] = obj[item[0]] || [];
  //   obj[item[0]].push(item[1]);
  // });
  // let lines = [...obj[0]];
  // for (let i = 1; i < k; i++) {
  //   let arr = [];
  //   lines.forEach((item) => {
  //     if (item !== n && obj[item]) {
  //       arr.push(...obj[item]);
  //     }
  //   });
  //   lines = arr;
  // }

  // console.log(lines);
  // lines = lines.filter((item) => item === n - 1);
  // console.log(lines.length, "length");
  // return lines.length;

  // 方法2 动态规划
  
};
numWays(
  5,
  [
    [0, 2],
    [2, 1],
    [3, 4],
    [2, 3],
    [1, 4],
    [2, 0],
    [0, 4],
  ],
  3
);
