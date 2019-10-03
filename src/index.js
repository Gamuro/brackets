module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let res = str;
    if(str%2){
        return false;
    }
    for(let i=0;i<res.length;i++){
        for(let j=0;j<bracketsConfig.length;j++){    
            if(bracketsConfig[j][0]==res[i] ){
            if(stack.length>0 && stack[stack.length-1]==bracketsConfig[j][0] && bracketsConfig[j][1]==res[i]){
               stack.splice(stack.length-1,1);
            }else {
                stack.push(res[i]);
            }
        }
             else if(bracketsConfig[j][1]==res[i]){
                if(stack[stack.length-1]==bracketsConfig[j][0]){
                    stack.splice(stack.length-1, 1);
                 
                }else if(stack[stack.length-1] !== bracketsConfig[j][0]) return false;
            }
        }
    }
    console.log('Длина стека', stack.length, stack);
    return stack.length>0 ? false : true;
}

