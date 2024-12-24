// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
enum roles{
    user ="user",
    admin = "admin" 
}

console.log(roles);
type loginUser = {
    name ?: string;
    password:string;
    gmail:string;
    user_role:roles;
}

var user1 = {
    password:"wwe",
    gmail : "ritika@gmail",
    user_role:roles.user
}

console.log(user1);
export {}