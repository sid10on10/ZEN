var arr = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
    let first = arr[0]

    let newObject = {}
    newObject[first] = arr[arr.length-1]
 return newObject;
}

console.log(transformFirstAndLast(arr))