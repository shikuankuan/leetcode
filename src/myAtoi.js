/**
 * 字符串转整数
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    if(!s){
        return 0;
    }
    let resStr = '';
    s = s.trim()
    let sLen = s.length;
    let currIdx = 0;
    let currStr = '';
    let hasZeroOrPlus = false;
    while (true) {
        currStr = s[currIdx]
        if(!resStr){
            if(currStr===' '){
                resStr = '0'
                break
            }
            if(isNaN(currStr)){
                if(!['-','+'].includes(currStr)){
                    resStr='0'
                    break;
                }
                if(currStr==='+'){
                    if(hasZeroOrPlus){
                        resStr = '0';
                        break;
                    }
                    hasZeroOrPlus = true;
                }
                if(currStr==='-'){
                    if(!hasZeroOrPlus){
                        resStr+=currStr;
                    }else{
                        resStr='0'
                        break
                    }
                    
                }
            }else{
                if(currStr!=='0'){
                    resStr+=currStr;
                }else{
                    hasZeroOrPlus=true;
                }
            }
        }else if(resStr==='-'){
            if(currStr===' ' || isNaN(currStr)){
                resStr='0';
                break;
            }else if(currStr!=='0'){
                resStr+=currStr;
            }
        }else{
            if(currStr===' ' || isNaN(currStr)){
                break;
            }else{
                resStr+=currStr;
            }
        }
        if(resStr.includes('-')){
            if(resStr.length>11){
                break
            }
        }else{
            if(resStr.length>10){
                break
            }
        }
        if(currIdx>=sLen-1){
            break;
        }
        currIdx++;
    }
    if(!resStr || resStr==='-'){
        return 0
    }
    if(resStr.includes('-')){
        if(resStr.length<11){
            return Number(resStr)
        }else{
            if(Number(resStr)<-2147483648){
                return -2147483648
            }else{
                return Number(resStr) 
            }
        }
    }else{
        if(resStr.length<10){
            return Number(resStr)
        }else{
            if(Number(resStr) > 2147483647){
                return 2147483647
            }else{
                return Number(resStr) 
            }
        }
    }
};

export default myAtoi