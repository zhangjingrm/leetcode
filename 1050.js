/**
 * 1051. 高度检查器
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let heightsCopy = [...heights];
  heights.sort((a, b) => a - b);
  let times = 0;
  heightsCopy.forEach((item, index) => {
    if (item !== heights[index]) times++;
  });
  return times;
};

// heightChecker([5, 1, 2, 3, 4]);

/**
 * 1154. 一年中的第几天
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  let map = {
    "01": 0,
    "02": 31,
    "03": 59,
    "04": 90,
    "05": 120,
    "06": 151,
    "07": 181,
    "08": 212,
    "09": 243,
    "10": 273,
    "11": 304,
    "12": 334,
  };
  let year = date.split("-")[0];
  let month = date.split("-")[1];
  let day = date.split("-")[2];
  let result = map[month] + parseInt(day);

  if (
    ((year % 100 === 0 && year % 400 === 0) ||
      (year % 100 !== 0 && year % 4 === 0)) &&
    parseInt(month) > 2
  ) {
    result++;
  }
  // console.log(result);
  return result;
};

dayOfYear("2004-03-01");
