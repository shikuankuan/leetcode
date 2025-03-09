import twoSum from "./twosum";
import addTwoNumbers, { ListNode } from "./addTwoNumbers";
import lengthOfLongestSubstring from "./lengthOfLongestSubstring";



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
