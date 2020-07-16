/**
 * 移动零
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let index = nums.indexOf(0);
  let lastIndex = nums.lastIndexOf(0);
  if (index < -1) {
    return;
  } else if (index === lastIndex) {
    nums.push(...nums.splice(index, 1));
  } else {
    let times = lastIndex - index + 1;
    const operate = (currenntIndex) => {
      times--;
      if (times < -1) {
        return;
      } else {
        if (nums[currenntIndex] === 0) {
          nums.push(...nums.splice(currenntIndex, 1));
          operate(currenntIndex);
        } else {
          operate(currenntIndex + 1);
        }
      }
    };
    operate(index);
  }

  console.log(index, lastIndex, nums);
};

// moveZeroes([4, 1, 5, 0, 12]);

/**
 * 移除元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const { length } = nums;
  let i = 0;
  while (i < length) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
};

// removeElement([3, 2, 2, 3], 3);

/**
 * 删除排序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let length = nums.length;
  let i = 0;
  while (i < length - 1) {
    if (nums[i + 1] === nums[i]) {
      nums.splice(i + 1, 1);
      length--;
    } else {
      i++;
    }
  }
  console.log(nums);
  return nums.length;
};

// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

/**
 * 移除排序数组中的重复项（最多出现两次）
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicatesDouble = function (nums) {
  let times = nums.length,
    currentIndex = 1;
  let n = 1;
  while (currentIndex < nums.length) {
    console.log(currentIndex, times, n);
    if (nums[currentIndex] === nums[currentIndex - 1]) {
      n++;
      if (n > 2) {
        nums.splice(currentIndex, 1);
        times--;
        n--;
      } else {
        currentIndex++;
      }
    } else {
      n = 1;
      currentIndex++;
    }
  }
  console.log(nums);
  return nums.length;
};

removeDuplicatesDouble([1, 1, 1]);
