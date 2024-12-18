 // about let in ts

 // 1.let have only block scope 
 let bool = true ;
 if(bool){
    let result = 100; //block scope
    console.log(`our result out of 90/${result}`,);
 }
//   console.log(result); //give error


//2. same name variable of let cannot be redeclare in block scope 
if(bool){
let christmas = "25/12/2024";
// let christmas = new Date();
   console.log(christmas);
}
else{
    let christmas = new Date();
    console.log(christmas);
}





