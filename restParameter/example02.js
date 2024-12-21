// var getLen = (...rest:number[],a:number,b:number) : number =>{ // rest paramter always a last value
//      return rest.length
// }
var getLen = function () {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return rest.length;
};
console.log(getLen(1, 2, 3, 4));
console.log(getLen(1, 2));
console.log(getLen());
