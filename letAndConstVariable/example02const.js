if (true) {
    var pi = 3.14;
}
// console.log(pi); // const also have block scope 
if (true) {
    var pi = 3.14;
    // const pi = 3.15; //same variable name not having in block scope
}
else {
    var pi = 3.15;
}
