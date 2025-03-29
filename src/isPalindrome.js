/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false.
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let xStr = x.toString();
  if (xStr.includes("-")) {
    return false;
  }
  let xLen = xStr.length;
  if(xLen===1){
    return true;
  }
  let leftStr = '';
  let rightStr = '';
  if (xLen % 2 === 0) {
    leftStr = xStr.slice(0, xLen / 2);
    rightStr = xStr.slice(xLen / 2);
  } else {
    xLen--;
    leftStr = xStr.slice(0, xLen / 2);
    rightStr = xStr.slice(xLen / 2 + 1);
  }
  return leftStr === rightStr.split('').reverse().join('');
};

export default isPalindrome;