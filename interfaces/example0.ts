//Index signatures in TypeScript are a feature of interfaces that allow you to define
//  properties dynamically. They are especially useful when you don't know the exact property names
//  at the time of writing code but know the type of those properties.
interface User{
    name: string ;
    [key:string] : string | number; //Use an index signature when properties other than known keys are expected.
}

var user1:User = {
    name : "ritika shishodia",
    address : "ghaziabad",
    age:23,
    adhaar : 78267128123,
}

user1["above18"] = 12;   // if we want to add property via object we can push 

console.log("user 1 details",user1);