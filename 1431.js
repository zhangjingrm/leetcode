/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  var max = Math.max(...candies);
  var result = [];
  candies.forEach((item) => {
    result.push(item >= max - extraCandies);
  });
  return result;
};

kidsWithCandies([12, 1, 12], 10);
