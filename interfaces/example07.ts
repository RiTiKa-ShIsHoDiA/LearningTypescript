// if two diff have same property  this case is impossible to solve in ts

// interface Teacher{
//    id : number
// }

// interface Student{
//    id : string   
// }

// type human = Teacher & Student  //typeScript will expect the property to satisfy both types simultaneously, which may produce unexpected results.


// declare const human1:human = {
//     id : 24 | "89"
// }

interface Human { 
    name : string | number
}

var human:Human= {
    name : "ritika"
}