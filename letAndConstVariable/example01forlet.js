// about let in ts
// 1.let have only block scope 
var bool = true;
if (bool) {
    var result = 100; //block scope
    console.log("our result out of 90/".concat(result));
}
//   console.log(result); //give error
//2. same name variable of let cannot be redeclare in block scope 
if (bool) {
    var christmas = "25/12/2024";
    // let christmas = new Date();
    console.log(christmas);
}
else {
    var christmas = new Date();
    console.log(christmas);
}
