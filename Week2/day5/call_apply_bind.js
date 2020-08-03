var func = function() {
    console.log(this)
}.bind(1);
func();

var obj = {
    callFun : func
}
obj.callFun();

function checkFun(a, b, c){
    console.log(this);
    console.log(a);
    console.log(b);
    console.log(c);
}
checkFun.call(1,2,3,4);

function check(a, b, c){
    console.log(this);
    console.log(a);
    console.log(b);
    console.log(c);
}
check.apply(1,[2,3,4]);

function sumOfNumbers() {
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
var sum = sumOfNumbers(1,2,3);
console.log(sum);

sum = sumOfNumbers.call(null,1,2,3);
console.log(sum);

var numbers = [1,2,3];
sum = sumOfNumbers.apply(null, numbers);
console.log(sum);

function ZipCode() {
    console.log(this)
}
ZipCode.call(1);

var updateZipCode = function () {
    console.log(this);
};
updateZipCode.call({ zip: '11787'});

var updateZip= function (newZip, country) {
    console.log(newZip + ' ' + country);
};
var zipCode = {
    zip: '11787'
};
updateZip.call(zipCode, '11888', 'us');

zipcode = {
    checkZipcode : function() {
        console.log(this);
        function updateZipCode() {
            console.log(this);
        }
        updateZipCode.call(this);
    }
}
zipcode.checkZipcode();

zipcode = {
    checkZipcode : function() {
        console.log(this);
        var updateZipCode = function() {
            console.log(this);
        }.bind(this);
        updateZipCode();
    }
}
zipcode.checkZipcode();

var person = {
    name : "Jack",
    prop : {
        name : "Daniel",
        getName : function() {
            return this.name;
        }
    }
}

var name = person.prop.getName.bind(person);
console.log(name());

name = person.prop.getName();
console.log(name);