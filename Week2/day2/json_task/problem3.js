var object = {name: "ISRO", age: 35, role: "Scientist"};

function convertListToObject(obj) {
    let outarr = []
    for(i in object){
        outarr.push([i,object[i]])
    }
    return(outarr)
}
console.log(convertListToObject(object))