// interaface have reopen means adding new properties 
// interfaces have inheritance using extend keyword
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

//reopening of interfaces 

interface Student{
    mobileNo : number
}



// happen inheritance 
interface Teacher extends Student{
     teacherName:string,
}


var student1:Student = {
    name : "Raman",
    rollNo : 1821510049,
    // address : "sapnawat",
    mobileNo : 70604405,
    class:"12th",
    getDetails : (name : string)=> {
        return `my name is ${name}`
    },
    getRollNo : (no:number)=> {
        return no
    }

}
// student1.rollNo = 12 ; // readonly not assig again modify allow 
console.log(student1.getDetails("Raman"));

var student2:Teacher = {
    name : "Raman",
    rollNo : 1821510049,
    // address : "sapnawat",
    mobileNo : 70604405,
    teacherName : "shubhangi",
    class:"12th",
    getDetails : (name : string)=> {
        return `my name is ${name}`
    },
    getRollNo : (no:number)=> {
        return no
    }

}