  // Generics is used for common types 

function identity(arg:number): number{
    return arg;
}  

// loosing the information of data on using any 
function identityOne(arg:any): any{

       arg += "1"
    return arg;
} 

function identityTwo(arg : number | string) : number | string {   //this is not good way becoz we have many data types 
     

    return  "ritika" 
}

console.log(identityOne(2));   // loose info of passed number data 

//Generics 
//basic syntax
function identityThree<Type>(arg:Type):Type{
    return arg ;
}

console.log(identityThree("hello"));


interface Gym{
    name:string;
    location:string;
}

console.log(identityThree<Gym>({
    name:"ritika",
    location:"ghz"
}));