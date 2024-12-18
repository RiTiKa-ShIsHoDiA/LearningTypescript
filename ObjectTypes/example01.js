function createEmployee(user) {
    var _a;
    var intro = "my name is ".concat(user.name, ", Yes this is ").concat(user.isPaid, " i am a active user, gmail is ").concat((_a = user.email) === null || _a === void 0 ? void 0 : _a.toUpperCase());
    console.log(intro);
}
// let user = {name : 'ritika',isPaid:true,email:"ritika@"};
createEmployee({ name: 'ritika', isPaid: true }); //issue pass in extra arguments but solve by optional property featurr ?
createEmployee({ name: 'ritika', isPaid: true, email: "ritika@dev" });
// newUser(user);
