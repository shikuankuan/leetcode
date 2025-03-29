import twoSum from "./twosum";
import addTwoNumbers, { ListNode } from "./addTwoNumbers";
import lengthOfLongestSubstring from "./lengthOfLongestSubstring";
import findMedianSortedArrays from './findMedianSortedArrays';
import longestPalindrome from './longestPalindrome';
import convert from './convert';
import reverse from './reverse';
import myAtoi from './myAtoi';
import isPalindrome from './isPalindrome';

if (module.hot) {
  module.hot.accept(); // 启用热更新
}
  
console.log("twoSum", twoSum([2, 7, 11, 15], 9));
let l11 = new ListNode(2);
l11.next = new ListNode(4);
l11.next.next = new ListNode(9);
let l22 = new ListNode(5);
l22.next = new ListNode(6);
l22.next.next = new ListNode(4);
l22.next.next.next = new ListNode(9);
console.log("addTwoNumbers", addTwoNumbers(l11, l22));
console.log(
  "lengthOfLongestSubstring",
  lengthOfLongestSubstring("wertdgfdsfddfgfs")
);
let arr1 = [1,3,5];
let arr2 = [1,5];
// console.log('25findMedianSortedArrays', findMedianSortedArrays(arr1,arr2))
// console.log('27longestPalindrome',longestPalindrome('abccba'))
// console.log('27longestPalindrome',longestPalindrome('bb'))
// console.log('29convert', convert('b',3))
// console.log('29convert', convert('PAYPALISHIRING',2))
// console.log('29convert', convert('PAYPALISHIRING',3))
// console.log('30convert', convert('PAYPALISHIRING',4))
// console.log('reverse', reverse(12334))
// console.log(" -042", myAtoi(" -042"))
// console.log("   +0 123", myAtoi("   +0 123"))
console.log("isPalindrome",311113, isPalindrome(311113))
console.log("isPalindrome",1, isPalindrome(1))
console.log("isPalindrome",11, isPalindrome(11))
console.log("isPalindrome",-1, isPalindrome(-1))

console.log("isPalindrome",12321, isPalindrome(12321))