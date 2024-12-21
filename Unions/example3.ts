// type aliasing with union 

type User = {
    name : string;
    id : number;
}

type authUser = {
    email : string
    ids : number
}

let user : User | authUser = { name :"ritika" , id : 304};

console.log(user);

user = {email : "ritika@dev", ids : 304}