function caller(index, operation){
    let val1 = 10, val2 = 20;
    return operation[index](val1, val2);
}

let add = function(a, b){
    return a + b; 
}

let sub = function(a, b){
    return a - b; 
}

let multiply = function(a, b){
    return a * b; 
}

let operation = [add, sub, multiply];
console.log(caller(0, operation));
console.log(caller(1, operation));
console.log(caller(2, operation));