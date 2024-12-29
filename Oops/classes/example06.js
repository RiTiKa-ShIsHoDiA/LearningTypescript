// example of inheritance 
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
var vehicle = /** @class */ (function () {
    function vehicle() {
    }
    return vehicle;
}());
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    car.prototype.setModel = function () {
        this.model = "hondacity xvu";
        this.engine = "ipXC304";
    };
    return car;
}(vehicle));
var car1 = new car();
car1.setModel();
console.log(car1);
