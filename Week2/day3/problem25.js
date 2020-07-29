var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    let outarr = []
    let sumpos = 0;
    let sumneg = 0;
 for(i of arr){
     if(i<0){
         sumneg+=i
     }else{
         sumpos+=i
     }
 }
 outarr.push(sumpos)
 outarr.push(sumneg)
 return outarr
}
console.log(ar2(arr));