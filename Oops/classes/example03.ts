// understand super 

class Parent{
    Dna:"XXY"
}

class Child extends Parent{
    name : string;
      constructor(myName:string){
        super(); // due to this first call parent constructor 
        this.name=myName;
      }
    disp():void{
        console.log("my name",this.name);
    }  
}

var child1:Child = new Child("Raman");

child1.disp();