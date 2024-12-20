var user = {
    id: [1, 2, 3],
    name: "ritika",
    email: "ritika@"
};
// user.id = [1,2,3]; // because in ts if any variable mark as redaonly not allow to redesign or update 
// user.id.push(2); // we can edit or modify the value of array 
user.id[1] = 3;
console.log(user);
