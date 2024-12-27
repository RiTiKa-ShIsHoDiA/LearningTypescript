interface Student1{
    name : string,
    readonly [key:string] : string | number
}

var student2:Student1 = {
    name : "ritika",
    age : 24,
    isVoterId:"true"
}
//student2["age"] = 29 // not allow to due to readonly 