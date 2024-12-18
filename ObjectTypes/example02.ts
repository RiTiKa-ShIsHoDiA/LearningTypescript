function loginEmployee1(user : {name:string,password:number}):{name : string , password : string}{
    
    return {
      name : `${user.name} shishodia`,
      password : `${user.password} @3#$%` ,
    }
}

const employeeDetails1 = loginEmployee1({name:"ritika",password:12311});
console.log(employeeDetails1);