/**
 * Z字形变换
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1){
        return s;
    }
    if(numRows===2){
        let arr1 = [];
        let arr2 = [];
        for (let index = 0; index < s.length; index++) {
            if(index%2===0){
                arr1.push(s[index])
            }else{
                arr2.push(s[index])
            }
        }
        return arr1.concat(arr2).join('')
    }
    
    let sLen = s.length;
    if(numRows>=sLen){
        return s;
    }
    let resArr = [];
    let currResArrIdx = 0;
    let singleStrColIdx = 0;
    let idx = 0;
    while (true) {
        if(!singleStrColIdx){
            resArr[currResArrIdx] = s.slice(idx,idx+numRows);
            idx+=numRows;
            singleStrColIdx+=1;
            currResArrIdx+=1;
        }else{
            resArr[currResArrIdx] = s[idx];
            if(singleStrColIdx+2 === numRows){
                singleStrColIdx=0;
            }else{
                singleStrColIdx+=1;
            }
            currResArrIdx+=1;
            idx+=1;
        }
        
        if(idx>=sLen){
            break;
        }
    }
    let resStr = '';
    let singleStrIdx = 0;
    for (let index = 0; index < numRows; index++) {
        singleStrIdx = 0;
        resArr.forEach((item,resArrIdx)=>{
            if(index===0){
                if(singleStrIdx===0){
                    resStr+=item[0];
                }
            }else if(index===numRows-1){
                if(singleStrIdx===0){
                    if(item[index]){
                        resStr+=item[index];
                    }
                }
            }else{
                if(singleStrIdx===0){
                    if(item[index]){
                        resStr+=item[index]
                    }
                }else{
                    if(index===numRows-singleStrIdx-1){
                        resStr+=item
                    }
                }
            }
            if(singleStrIdx+2===numRows){
                singleStrIdx=0;
            }else{
                singleStrIdx+=1;
            }
        })
    }
    return resStr
};
export default convert