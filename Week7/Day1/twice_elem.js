function counter(arr,k){
    return arr.filter(data=>data==k).length
}
let arr = userInput[1].split(" ").map(val=>+val)
let elem = arr.filter(data=>counter(arr,data)==2)[0]
console.log(elem)