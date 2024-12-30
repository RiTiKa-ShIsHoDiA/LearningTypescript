// one abstract class inherit from other abstract class

abstract class class1{
    abstract method1():void
}

abstract class class2 extends class1{
 method2():void{
    console.log("I am method2");
 }
    method1():void{
       console.log("parent classs method derived");
    }
}

class class3 extends class2{
   
}

const hs = new class3();
hs.method1();
