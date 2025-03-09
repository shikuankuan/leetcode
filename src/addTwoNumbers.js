export function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  
  /**
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  var addTwoNumbers = function (l1, l2) {
    let resListNode = new ListNode(0);
    let sumRes = 0; // 数组相同下标相加之和
    let isSum1 = 0; // 数组后一位是否+1
    let currResNode = resListNode;
    while (l1 !== null || l2 !== null) {
      sumRes = (l1?.val || 0) + (l2?.val || 0) + isSum1;
      isSum1 = 0;
      if (sumRes >= 10) {
        currResNode.next = new ListNode(sumRes - 10);
        currResNode = currResNode.next;
        isSum1 = 1;
      } else {
        currResNode.next = new ListNode(sumRes);
        currResNode = currResNode.next;
      }
      if (l1 !== null) l1 = l1.next;
      if (l2 !== null) l2 = l2.next;
    }
    if (isSum1) {
      currResNode.next = new ListNode(1);
    }
    return resListNode.next;
  };

  export default addTwoNumbers;