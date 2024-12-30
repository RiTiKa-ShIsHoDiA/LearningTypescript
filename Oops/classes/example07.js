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
//abstract class = acheive abstraction only declare method , those methods defined in derived classes
var School = /** @class */ (function () {
    function School(name) {
        this.name = name;
        // some code
    }
    // defining the non-abstract methods
    School.prototype.save = function () {
        console.log("The save method of the abstract class is executed.");
    };
    return School;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name) {
        return _super.call(this, name) || this;
    }
    student.prototype.getDetails = function () {
        console.log("get details");
    };
    return student;
}(School));
// const obj = new School() can't create objects of abstract classes
var rs = new student("Raman");
rs.getDetails();
rs.save();
