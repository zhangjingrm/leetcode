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
