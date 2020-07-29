function powersOfTwo(n){
    let res = []
    for(let i=0;i<n+1;i++){
        res.push(2**i)
    }
    return res;
  }