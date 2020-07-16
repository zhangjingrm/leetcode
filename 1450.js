/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  let number = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      number++;
    }
  }
  return number;
};

busyStudent(
  [9, 8, 7, 6, 5, 4, 3, 2, 1],
  [10, 10, 10, 10, 10, 10, 10, 10, 10],
  5
);
