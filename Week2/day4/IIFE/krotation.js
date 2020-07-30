let arr = [1,2,3,4,5];

let rotate = function(arr, k){
    let splittedArr = arr.splice(0, k);
    return arr.concat(splittedArr);
}
console.log(rotate(arr,4))