function loginEmployee1(user) {
    return {
        name: "".concat(user.name, " shishodia"),
        password: "".concat(user.password, " @3#$%"),
    };
}
var employeeDetails1 = loginEmployee1({ name: "ritika", password: 12311 });
console.log(employeeDetails1);
