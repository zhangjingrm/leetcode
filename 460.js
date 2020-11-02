/**
 * 461. 汉明距离
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) { };

// hammingDistance(93, 73);

/**
 * 474. 一和零
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  let arr1 = [];
  let arr2 = [];
  strs.forEach(item => {
    console.log(item);
    let a = 0;
    let b = 0;
    item.split('').forEach(item =>  {
      if (item == 0) {
        a++;
      }
      if (item == 1) {
        b++;
      }
    });
    arr1.push(a);
    arr2.push(b);
  });
  console.log(arr1, arr2);
  // [1, 3, 2, 0, 1]
};
findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3);
