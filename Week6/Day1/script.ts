let chunk  = function (arr:[],k:number){
    let outarr = []
    for(let i=0;i<arr.length;i+=k){
        outarr.push(arr.slice(i,i+k))
    }
    return outarr
  }

  let sum = function (arr:[]){
    let sum = 0;
    for(i of arr){
      sum+=i
    }
    return sum
  }