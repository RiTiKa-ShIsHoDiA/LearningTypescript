var getMax = function () {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return Math.max.apply(Math, rest); //rest
};
console.log(getMax(1, 10, 2, 30));
console.log(getMax(1, 10, 2, 300));
console.log(getMax(1, 1000, 2, 20));
