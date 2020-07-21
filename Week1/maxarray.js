let myarray = [0,1,2,13,4,98,56,25,26]

function max(array){
    array.sort((a,b)=>(b-a))
    return array[0]
}

console.log(max(myarray))