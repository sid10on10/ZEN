var chunk = function (arr, k) {
    var outarr = [];
    for (var i = 0; i < arr.length; i += k) {
        outarr.push(arr.slice(i, i + k));
    }
    return outarr;
};
var sum = function (arr) { return arr.reduce(function (acc, item) { return acc += item; }, 0); };
var filter = function (arr) { return arr.filter(function (data) { return data % 3 === 0; }); };
var find = function (arr) { return arr.filter(function (data) { return data % 7 == 0; }); };
var reduce = function (arr) { return arr.reduce(function (total, item) { return total + item; }, 0); };
