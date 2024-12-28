// oops {encapsulation,inheritance,data hidig, polymorphism}
var Car = /** @class */ (function () {
    // intilize field with constructor
    function Car(data) {
        this.engine = data;
    }
    return Car;
}());
var mercedes = new Car("IPSEC302WE");
console.log(mercedes.engine); // by default fields are public 
