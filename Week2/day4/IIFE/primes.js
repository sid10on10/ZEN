let arr = [1,2,3,4,90,55,100,23,13,12,25];

(function(){
    function isPrime(num){
        for(let i=2;i<num;i++){
            if(num%i===0){
                return false
            }
        }
        return true
    };
    let prime_arr = arr.filter(item=>isPrime(item))
    console.log(prime_arr)
})();