// use case of getters setters
// all getters or setter being used for private fields 
var course = /** @class */ (function () {
    function course() {
        this._courseCount = 1;
    }
    Object.defineProperty(course.prototype, "getCourseCount", {
        get: function () {
            return this._courseCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(course.prototype, "setCourseCount", {
        set: function (n) {
            this._courseCount = n;
        },
        enumerable: false,
        configurable: true
    });
    return course;
}());
var course1 = new course();
console.log(course1.getCourseCount);
course1.setCourseCount = 4;
console.log(course1.getCourseCount);
