// example of inheritance 

class vehicle{
    name:string;
    protected engine : string
}

class car extends vehicle{
    model:string ; 
    setModel():void{
        this.model = "hondacity xvu";
        this.engine = "ipXC304";
    }
}


var car1 = new car(); 
car1.setModel();
console.log(car1);
