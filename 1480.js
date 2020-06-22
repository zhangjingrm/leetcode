var runningSum = function (nums) {
  var sum = [];
  var numsSum = nums.reduce(function (accumulator, current) {
    sum.push(accumulator);
    return accumulator + current;
  });
  sum.push(numsSum);
  return sum;
};

runningSum([3, 1, 2, 10, 1]);
