function printData1(_a) {
    var num1 = _a.num1, _b = _a.num2, num2 = _b === void 0 ? 0 : _b;
    console.log("the value of num1 is", num1);
    console.log("the value of num2 is", num2);
}
printData1({ num1: 23, num2: 23 });
printData1({ num1: 23 }); // pass one arg due to default parameter 
