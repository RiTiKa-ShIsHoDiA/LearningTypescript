var getSum = function () {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, rest_1 = rest; _a < rest_1.length; _a++) {
        var element = rest_1[_a];
        sum += element;
    }
    return sum;
};
console.log(getSum(1, 2, 3));
console.log(getSum(1, 2, 3, 4, 5, 6));
console.log(getSum());
