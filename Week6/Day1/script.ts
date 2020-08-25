let chunk  = function (arr:[],k:number){
    let outarr = []
    for(let i=0;i<arr.length;i+=k){
        outarr.push(arr.slice(i,i+k))
    }
    return outarr
  }