// interfaces = it will like a object it have properties and method structure/ signature

interface Student{
    name:string,
    readonly rollNo:number,
    address?:string, // make property optional
    class:string,
    // getDetails : (nam:string)=> string,
    getDetails(nam:string) : string,
    // getRollNo : (rollno:number)=> number
    getRollNo(rollno:number) : number
}

// var student1:Student = {
//     name : "Raman",
//     rollNo : 1821510049,
//     // address : "sapnawat",
//     class:"12th",
//     getDetails : (name : string)=> {
//         return `my name is ${name}`
//     },
//     getRollNo : (no:number)=> {
//         return no
//     }

// }
// // student1.rollNo = 12 ; // readonly not assig again modify allow 
// console.log(student1.getDetails("Raman"));