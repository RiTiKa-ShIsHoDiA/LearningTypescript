// oops {encapsulation,inheritance,data hidig, polymorphism}

class Car{
    //field = where data store of object 
    engine:string;
   // intilize field with constructor
    constructor(data:string){
        this.engine = data;
    }

}

var mercedes = new Car("IPSEC302WE");
console.log(mercedes.engine);  // by default fields are public 