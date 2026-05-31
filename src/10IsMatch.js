/**
 * 正则表达式匹配（动态规划）
 *
 * @param {string} s - 输入字符串
 * @param {string} p - 模式字符串，支持 '.' 和 '*'
 * @return {boolean} - 是否完全匹配
 *
 * 动态规划思路：
 * dp[i][j] = s 的前 i 个字符能否被 p 的前 j 个字符完全匹配
 *
 * 状态转移：
 *   1. p[j-1] 不是 '*'：普通匹配，看当前字符是否相等，然后继承 dp[i-1][j-1]
 *   2. p[j-1] 是 '*'：X* 可以匹配 0 次（丢弃 X*，继承 dp[i][j-2]）
 *      或匹配多次（s[i-1] 能被 X 匹配时，继承 dp[i-1][j]）
 */
function isMatch(s, p) {
  const m = s.length;
  const n = p.length;

  // dp[i][j] 表示 s[0..i-1] 是否能被 p[0..j-1] 匹配
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
  // 初始化：空串配空模式
  dp[0][0] = true;

  // 初始化第一行：空字符串能否被 p 的前 j 个字符匹配
  // 只有当 p 中出现 X* 时，才能匹配空串（让 X 出现 0 次）
  for (let j = 2; j <= n; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2];
    }
  }

  // 填充 DP 表
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
        // 情况 A：让 X* 匹配 0 次 → 直接跳过 X*
        const matchZero = dp[i][j - 2];

        // 情况 B：让 X* 匹配 1+ 次 → 先看 s[i-1] 能否被 p[j-2] 匹配
        const charMatch = p[j - 2] === '.' || p[j - 2] === s[i - 1];
        const matchOneOrMore = charMatch && dp[i - 1][j];

        dp[i][j] = matchZero || matchOneOrMore;
      } else {
        // 普通字符或 '.'：当前字符匹配上 + 前面也匹配上
        const charMatch = p[j - 1] === '.' || p[j - 1] === s[i - 1];
        dp[i][j] = charMatch && dp[i - 1][j - 1];
      }
    }
  }

  return dp[m][n];
}

// ===== 测试用例 =====
console.log('示例 1:', isMatch('aa', 'a'));        // false
console.log('示例 2:', isMatch('aa', 'a*'));       // true
console.log('示例 3:', isMatch('ab', '.*'));       // true
console.log('示例 4:', isMatch('aab', 'c*a*b'));   // true
console.log('示例 5:', isMatch('mississippi', 'mis*is*p*.')); // false
console.log('示例 6:', isMatch('aaa', 'a*a'));     // true
