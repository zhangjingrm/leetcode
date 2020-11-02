/**
 * 867. 转置矩阵
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
  let arr = [];
  for (let i = 0; i < A.length; i++) {
    for (j = 0; j < A[i].length; j++) {
      if (arr[j]) {
        arr[j].push(A[i][j]);
      } else {
        arr[j] = [A[i][j]]
      }
    }
  }
  console.log(arr);
  return arr;
};

transpose([[1, 2, 3], [4, 5, 6]])