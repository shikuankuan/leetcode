/**
 * 整数反转，120 反转后为 21
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isLessThanZero = x<0;
    const numToStr = (isLessThanZero ? -x : x) + '';
    const strReverse = numToStr.split('').reverse().join('');
    if(Number(strReverse)>2**31-1 || Number(strReverse) < -(2**31)){
        return 0
    }
    return isLessThanZero ? - Number(strReverse) : Number(strReverse)
};

export default reverse;