var num = 5;
function getOpposite(num) {
    if(isNaN(num)){
        return -1
    }else{
        return num - (num*2)
    }
}
var result = getOpposite(num)
console.log(result)