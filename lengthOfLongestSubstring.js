// 无重复字符的最长子串
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s) {
      return 0;
    }
    let currStrIdx = 0;
    let currStr = "";
    let maxLen = 0;
    let strLen = s.length;
    let arr = [];
    let set = new Set();
    // debugger
    while (true) {
      if(s[currStrIdx]){
        currStr = s[currStrIdx];
      }
      // 当前set中出现与当前字符相同的值
      if(set.has(currStr)){
        if(maxLen < set.size){
          maxLen = set.size; // 无重复复字符最大长度为set的长度
        }
        arr = Array.from(set); // set转化为arr，用于获取相同字符在无重复字符中的位置，并截取剩余无重复字符
        // 找出相同的元素在set中的下标
        arr = arr.splice(arr.indexOf(currStr)+1);
        set = new Set(arr); // 将arr转换为set
        set.add(currStr);
      }else{
        set.add(s[currStrIdx])
      }
      // 当前下表超出字符串长度
      if(currStrIdx>=strLen){
        if(maxLen<set.size){ // 防止下标超出
          maxLen = set.size;
        }
        break;
      }
      currStrIdx++;
    }
    return maxLen;
  };

  export default lengthOfLongestSubstring;