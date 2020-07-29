var arr = [1, 2, 3];
function hourToSeconds(arr) {
    return arr.map(val=>val*3600)
}
var data = hourToSeconds(arr)
console.log(data)