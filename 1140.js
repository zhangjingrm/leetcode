/**
 * 1143. 最长公共子序列
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let arr1 = [...text1];
  let arr2 = [...text2];
  let rows = text1.length;
  let columns = text2.length;
  let dp = Array.from(new Array(rows), () => new Array(columns).fill(0));

  dp[0][0] = arr1[0] === arr2[0] ? 1 : 0;
  for (let i = 1; i < rows; i++) {
    dp[i][0] = arr1[i] === arr2[0] ? 1 : dp[i - 1][0];
  }
  for (let j = 1; j < columns; j++) {
    dp[0][j] = arr1[0] === arr2[j] ? 1 : dp[0][j - 1];
  }
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      dp[i][j] =
        Math.max(dp[i][j - 1], dp[i - 1][j]) + (arr1[i] === arr2[j] ? 1 : 0);
    }
  }
  // console.log(dp);
  return dp[rows - 1][columns - 1];
};

longestCommonSubsequence("bsbininm", "jmjkbkjkv");
