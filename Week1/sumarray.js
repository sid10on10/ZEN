let myarray = [0,1,2,13,4,98,56,25,26]

function sumarray(array){
        let sum = 0;
        for(i of myarray){
            sum+=i
        }
        return sum
}

console.log(sumarray(myarray))