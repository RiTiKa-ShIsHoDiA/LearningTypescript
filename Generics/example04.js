"use strict";
// concatenate two category 
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function concatenate(first, Second) {
    return __assign(__assign({}, first), Second);
}
console.log(concatenate("hello", [1, 2, 3, 4]));
{
    // 0:'h', these value are overwrite becoz object have unique keys 
    // 1:'e',
    // 2:'l',
    // 3:'l',
    //main output 
    // 4:'o',
    // 0:1,
    // 1:2,
    // 2:3,
    // 3:4,
}
