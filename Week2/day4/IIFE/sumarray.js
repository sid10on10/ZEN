let arr = [1,2,3,4,90,55,100,23,13,12,25];

(function(){
    let sum_arr = arr.reduce((acc,item)=>{
        return acc+=item
    },0)
    console.log("Sum Array:",sum_arr)
})();