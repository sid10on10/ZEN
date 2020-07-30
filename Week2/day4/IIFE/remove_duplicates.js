let arr = [1,2,3,4,5,6,1,2,5,6,7,10,9,6];

(function(){
    let unique_arr = []
    for(i of arr){
        if(unique_arr.indexOf(i)===-1){
            unique_arr.push(i)
        }else{
            //pass
        }
    } 
    console.log(unique_arr)
})();