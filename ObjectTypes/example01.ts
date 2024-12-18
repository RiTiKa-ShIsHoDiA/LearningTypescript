function createEmployee(user : {name: string,isPaid:boolean,email?:string}){
    let intro = `my name is ${user.name}, Yes this is ${user.isPaid} i am a active user, gmail is ${user.email?.toUpperCase()}`
    console.log(intro);
}
// let user = {name : 'ritika',isPaid:true,email:"ritika@"};

createEmployee({name : 'ritika',isPaid:true}); //issue pass in extra arguments but solve by optional property featurr ?
createEmployee({name : 'ritika',isPaid:true,email:"ritika@dev"});
// newUser(user);
