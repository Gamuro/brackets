module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let res = str;
    if(str%2){
        return false;
    }
    for(let i=0;i<res.length;i++){
        for(let j=0;j<bracketsConfig.length;j++){
            if(bracketsConfig[j][0]==res[i]){
                stack.push(res[i]);
            }else if(bracketsConfig[j][1]==res[i]){
                if(stack[stack.length-1]==bracketsConfig[j][0]){
                    stack.splice(stack.length-1, 1);
                 
                }else return false;
            }
        }
    }
    console.log(stack);
    return stack.length>0 ? false : true;
}

