/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  function transArr(arr) {
    const len =
      arr.length % 2 === 0 ? arr.length / 2 : Math.floor(arr.length / 2) + 1;
    for (let i = 0; i < len; i++) {
      let tag = arr[i];
      arr[i] = arr[arr.length - 1 - i] === 0 ? 1 : 0;
      arr[arr.length - 1 - i] = tag === 0 ? 1 : 0;
    }
    return arr;
  }
  return A.map((item) => transArr(item));
};

flipAndInvertImage([
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
]);
