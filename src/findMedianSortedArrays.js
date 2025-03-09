/**
 * @description 寻找两个正序数组的中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let allNums = nums1.concat(nums2);
    allNums = allNums.reduce((a,b)=>a-b);
    
};