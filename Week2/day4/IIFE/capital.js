let arr = ["week1","week2","anony","HiWorld","aabbbbaa"];

(function(){
 let newarr = arr.map((data)=>{
     data = data[0].toUpperCase()+data.slice(1)
     return data
    })
console.log(newarr)
})();