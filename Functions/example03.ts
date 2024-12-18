// why return type need to mention 

function gethi():number{
    return 3;
}
gethi();

const nameOfStudents = ["raman","ritika","sonia"];
// const rollNo = [1,2,3];

nameOfStudents.map((nme): string => {
    return `name of student is ${nme}`
})

function fail(msg: string):never{
    throw new Error(msg);
}
