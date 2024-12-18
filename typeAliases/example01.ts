type Employee = {
    name:string;
    mobileNo:number;
    email:string;
}

function getDetailsOfEmployee(user:Employee):Employee{
    console.log(user.mobileNo);
   return { 
       name : user.name + " shishodia" ,
       mobileNo:user.mobileNo + 12 ,
       email : user.email + "dev"
   }
}
console.log(getDetailsOfEmployee({name:"ritika",mobileNo:706044,email:"ritika@."}));