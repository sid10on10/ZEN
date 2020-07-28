var array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];

function fromListToObject(arr) {
    var newObject = {};
    for(i of arr){
        newObject[i[0]] = i[1]
    }
    return newObject;
   }

console.log(fromListToObject(array))