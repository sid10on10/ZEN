var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var pet = /** @class */ (function () {
    function pet(parameters) {
        this.name = parameters.name;
        this.type = parameters.type;
        this.color = parameters.color;
        this.age = parameters.age;
        this.breed = parameters.breed;
        this.history = parameters.history;
        this.Location = parameters.Location;
    }
    return pet;
}());
var request = /** @class */ (function () {
    function request() {
        this.query = [];
        this.pets = [];
    }
    request.prototype.storeEnquiry = function (enquery) {
        this.query.push(enquery);
    };
    request.prototype.enqueryStatus = function () {
        var result = [];
        for (var i = 0; i < 5 && i < this.query.length; i++) {
            var search = this.petAvailable(this.query[i]);
            result.push(search);
        }
        return result;
    };
    request.prototype.petAvailable = function (queryArr) {
        var res = { pets: [], count: 0 };
        var _loop_1 = function (i) {
            var query = queryArr[i];
            this_1.pets.forEach(function (pet) {
                var isAvailable = Object.keys(query).every(function (constrains) { return query[constrains] == pet[constrains] || query[constrains] == ''; });
                if (isAvailable) {
                    var petData = { name: pet.name };
                    res.pets.push(petData);
                    res.count++;
                }
            });
        };
        var this_1 = this;
        for (var i in queryArr) {
            _loop_1(i);
        }
        return res;
    };
    return request;
}());
var availability = /** @class */ (function (_super) {
    __extends(availability, _super);
    function availability() {
        var _this = _super.call(this) || this;
        _this.pets = [];
        return _this;
    }
    availability.prototype.insert = function (newPet) {
        this.pets.push(newPet);
    };
    availability.prototype.removePet = function (name) {
        var elementIndex = this.pets.findIndex(function (element) { return element.name == name; });
        this.pets.splice(elementIndex, 1);
    };
    availability.prototype.count = function () {
        var pets = this.pets.reduce(function (acc, element) {
            acc[element.type] ? acc[element.type]++ : acc[element.type] = 1;
            return acc;
        }, {});
        return pets;
    };
    return availability;
}(request));
var petShop = new availability();
var pet1 = new pet({
    name: 'shiro',
    type: "dog",
    color: 'white',
    age: 2,
    breed: "dog",
    history: "New Born",
    Location: "chennai"
});
petShop.insert(pet1);
var pet2 = new pet({
    name: 'hima',
    type: "dog",
    color: 'brown',
    age: 4,
    breed: "dog",
    history: "Owned by rajesh",
    Location: "chennai"
});
petShop.insert(pet2);
var pet3 = new pet({
    name: 'momo',
    type: "cat",
    color: 'white',
    age: 2,
    breed: "cat",
    history: "New Born",
    Location: "chennai"
});
petShop.insert(pet3);
var pet4 = new pet({
    name: 'nemo',
    type: "fish",
    color: 'golden orange',
    age: 2,
    breed: "gold fish",
    history: "owned by gupta",
    Location: "chennai"
});
petShop.insert(pet4);
var pet5 = new pet({
    name: 'meow',
    type: "cat",
    color: 'black',
    age: 2,
    breed: "cat",
    history: "New Born",
    Location: "chennai"
});
petShop.insert(pet5);
petShop.storeEnquiry([{ color: 'white', type: 'dog' }]);
petShop.storeEnquiry([{ type: 'cat', color: 'black' }]);
console.log(petShop.enqueryStatus());
console.log(petShop.count());
