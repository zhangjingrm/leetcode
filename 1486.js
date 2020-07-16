/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let result = null;
  for (let i = 0; i < n; i++) {
    result = result === null ? start + 2 * i : result ^ (start + 2 * i);
  }
  console.log(n, start, result);
  // return result;
};

xorOperation(1, 0);
xorOperation(2, 0);
xorOperation(3, 0);
xorOperation(4, 0);
xorOperation(5, 0);
