// learn override classes

class Base{
    greet(){
        console.log("I am a base class");
    }
}
class Derived extends Base{
    greet(n?:string){
        if(n === undefined){
            super.greet();
        }
        else
        console.log("I am the Derived Class");
    }
}

var obj1 = new Derived();
obj1.greet();
obj1.greet("hello");