let arr = [1,2,3,4,90,55,100,23,13,12,25]

(function(){
    let odd_arr = arr.filter(data=>data%2===1)
    console.log("Odd Numbers:",odd_arr)
})();