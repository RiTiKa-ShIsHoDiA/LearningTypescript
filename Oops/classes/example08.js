// one abstract class inherit from other abstract class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var class1 = /** @class */ (function () {
    function class1() {
    }
    return class1;
}());
var class2 = /** @class */ (function (_super) {
    __extends(class2, _super);
    function class2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class2.prototype.method2 = function () {
        console.log("I am method2");
    };
    class2.prototype.method1 = function () {
        console.log("parent classs method derived");
    };
    return class2;
}(class1));
var class3 = /** @class */ (function (_super) {
    __extends(class3, _super);
    function class3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return class3;
}(class2));
var hs = new class3();
hs.method1();
