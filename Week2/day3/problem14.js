function isEven(num){
    if(isNaN(num)){
        return -1
    }else{
        if(num%2===0){
            return true
        }else{
            return false
        }
    }
   }
   var even = isEven(5)
   console.log(even)