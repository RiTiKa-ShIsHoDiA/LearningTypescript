const birthDate =  (person:string,dobDate:Date)=>{
    person();
    console.log(`${person} birth ${dobDate.toLocaleTimeString()}`);
}
birthDate("raman",new Date());