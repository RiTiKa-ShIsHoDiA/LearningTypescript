// var getLen = (...rest:number[],a:number,b:number) : number =>{ // rest paramter always a last value
//      return rest.length
// }

var getLen = (...rest:number[]) : number =>{ 
      return rest.length;
}

console.log(getLen(1,2,3,4));
console.log(getLen(1,2));
console.log(getLen());

