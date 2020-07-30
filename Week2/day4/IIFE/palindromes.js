let arr = ["week1","week2","anony","HiWorld","abba"];

(function(){
    function isPalindrome(string){
        let pali = string.split("").reverse().join("")
        if(pali===string){
            return true
        }else{
            return false
        }
    }
 let newarr = arr.filter((data)=>isPalindrome(data))
console.log(newarr)
})();