// Generics is used for common types 
function identity(arg) {
    return arg;
}
// loosing the information of data on using any 
function identityOne(arg) {
    arg += "1";
    return arg;
}
console.log(identityOne(2));
