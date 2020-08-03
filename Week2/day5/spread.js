const person = {
    firstName: "GUVI",
    lastName: "GEEK",
    age: 3,
    sex: "M"
  }
  
let first = person.firstName;
let  age = person.age;
let sex = person.sex;

console.log(first); 
console.log(age); 
console.log(sex); 

({ firstName, age, sex } = {...person});
  
console.log(firstName)
console.log(age)
console.log(sex)
  
const person = {
    firstName:"GUVI",
    lastName:"GEEK",
    age:3,
    sex:"M"
}

function joinFirstLastName({firstName, lastName}) { // setting values by destructuring
    return firstName + '-' + lastName;
}
  
console.log(joinFirstLastName(person));

var list = [ 1, 2, 3 ];
var [ a, b ] = list;
[ b, a ] = [ a, b ]
console.log(a, b)