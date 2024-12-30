//abstract class = acheive abstraction only declare method , those methods defined in derived classes
abstract class School {
    constructor(public name :string) {
        // some code
    }

    abstract getDetails() : void  // make abstract method declare methods

     // defining the non-abstract methods
   save(): void {
    console.log("The save method of the abstract class is executed.");
 }
}

class student extends School {
   constructor(name : string){
    super(name);
   }
   getDetails(): void {   // we can overrise methods in abstract classes 
       console.log("get details");
   }
}

// const obj = new School() can't create objects of abstract classes

const rs = new student("Raman");
rs.getDetails();
rs.save();