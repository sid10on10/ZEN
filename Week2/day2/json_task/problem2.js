var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {
 let outarr = []
 for(i in obj){
     outarr.push(i)
 }
 return outarr
}

console.log(printAllValues(obj))
