/**
 * @description 寻找两个正序数组的中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(!nums1.length && !nums2.length){
        return 0
    }
    let allNums = nums1.concat(nums2);
    allNums = allNums.sort((a,b)=>a-b);
    let len = allNums.length;
    return len%2 ===0 ? (allNums[len/2-1] + allNums[len/2])/2 : allNums[Math.floor(len/2)];
};

export default findMedianSortedArrays;