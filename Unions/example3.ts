// type aliasing with union 

type User = {
    name : string;
    id : number;
}

type authUser = {
    gmail : string;
    id : number;
}

let user : User | authUser = { name :"ritika" , id : 304};

console.log(user);

user = {gmail : "ritika@dev", id : 304}