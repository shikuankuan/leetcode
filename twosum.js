/**
 * 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let unShiftNum = 0; // 记录头部删除了多少个元素
    const sumNums = JSON.parse(JSON.stringify(nums));
    let targetArr = [];
    sumNums.shift();
  
    for (let i = 0; i < nums.length; i++) {
      if (targetArr.length) {
        break;
      }
      for (let j = 0; j < sumNums.length; j++) {
        if (targetArr.length) {
          break;
        }
        if (nums[i] + sumNums[j] === target) {
          targetArr = [i, j + 1 + unShiftNum];
        }
      }
      sumNums.shift();
      unShiftNum += 1;
    }
    return targetArr;
  };

  export default twoSum;