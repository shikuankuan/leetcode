/**
 * @description 给定一个字符串s，找到最长的回文子串。回文子串：aba，字符串向前读和向后读都相同
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let resStr = ""; // 最终最长回文子串
  let currResStr = s[0]; // 当前最长回文子串
  let leftStr = ""; // 当前字符串截取后左边字符串
  let rightStr = ""; // 当前字符串截取后右边字符串
  let leftUnSameOffset = 0; // 左偏移量
  let rightUnSameOffset = 0; // 右偏移量
  let rightSameOffset = 0; // 右相同字符串偏移量
  let currIdx = 0;
  if (!s) {
    return;
  }
  if (s.length === 1) {
    return s;
  }
  while (true) {
    leftStr = s.slice(0, currIdx);
    rightStr = s.slice(currIdx + 1);
    if (!rightStr) {
      break;
    }
    if (!rightStr[rightSameOffset + rightUnSameOffset]) {
      currIdx = currIdx + 1 + rightSameOffset;
      rightUnSameOffset = 0;
      rightSameOffset = 0;
      leftUnSameOffset = 0;
      if (currResStr.length > resStr.length) {
        resStr = currResStr;
      }
      currResStr = s[currIdx];
      if (!currResStr) {
        break;
      }
    }
    if (rightStr[rightSameOffset] === s[currIdx] && rightUnSameOffset === 0) {
      // 右边查找字符与当前字符相同

      currResStr += rightStr[rightSameOffset];
      rightSameOffset += 1;
    } else {
      // 右边字符与当前字符不相同
      if (!leftStr) {
        // 左边无字符
        resStr = currResStr;
        currIdx = currIdx + 1 + rightSameOffset;
        rightUnSameOffset = 0;
        rightSameOffset = 0;
        leftUnSameOffset = 0;
        if (currResStr.length > resStr.length) {
          resStr = currResStr;
        }
        currResStr = s[currIdx];
        if (!currResStr) {
          break;
        }
      } else {
        // 左边字符串不为空
        if (
          leftStr[leftStr.length - leftUnSameOffset - 1] &&
          leftStr[leftStr.length - leftUnSameOffset - 1] ===
            rightStr[rightSameOffset + rightUnSameOffset]
        ) {
          // 左边当前查找字符存在并且等于右边当前查找字符
          currResStr =
            leftStr[leftStr.length - leftUnSameOffset - 1] +
            currResStr +
            rightStr[rightSameOffset + rightUnSameOffset];
          rightUnSameOffset += 1;
          leftUnSameOffset += 1;
        } else {
          currIdx = currIdx + 1 + rightSameOffset;
          rightUnSameOffset = 0;
          rightSameOffset = 0;
          leftUnSameOffset = 0;
          if (currResStr.length > resStr.length) {
            resStr = currResStr;
          }
          currResStr = s[currIdx];
          if (!currResStr) {
            break;
          }
        }
      }
    }
    if (currIdx >= s.length - 1) {
      break;
    }
  }
  return resStr;
};

export default longestPalindrome;
