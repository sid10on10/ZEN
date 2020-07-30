let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

(function(){
    let final_arr = arr1.concat(arr2)
    let n = final_arr.length
    console.log(final_arr[n/2-1],final_arr[n/2])
})();