"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
var roles;
(function (roles) {
    roles["user"] = "user";
    roles["admin"] = "admin";
})(roles || (roles = {}));
console.log(roles);
var user1 = {
    password: "wwe",
    gmail: "ritika@gmail",
    user_role: roles.user
};
console.log(user1);
