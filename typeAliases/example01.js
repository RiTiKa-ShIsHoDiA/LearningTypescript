function getDetailsOfEmployee(user) {
    console.log(user.mobileNo);
    return {
        name: user.name + " shishodia",
        mobileNo: user.mobileNo + 12,
        email: user.email + "dev"
    };
}
console.log(getDetailsOfEmployee({ name: "ritika", mobileNo: 706044, email: "ritika@." }));
