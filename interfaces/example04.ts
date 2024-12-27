// readonly can be change by aliasing 
interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
  }


  var person:ReadonlyPerson = {
    name :"ritika",
    age : 24,
  }

//   person.age = "ritika"   // not allow to change need to aliasing 

interface writeablePerson{
    name : string,
    age : number
}

var person1:writeablePerson =  person;

person1.name = "ritika shishodia" 

console.log("person1 details",person1);