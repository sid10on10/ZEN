function findMax(ar)
{
    var max = ar.reduce(function(a, b) {
        return Math.max(a, b);
    });
    return max
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);