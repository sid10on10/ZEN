function getPositives(ar)
{
 // your code here
 let outarr = []
 for(i of ar){
     if(i>0){
        outarr.push(i)
     }
 }
 return outarr
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);