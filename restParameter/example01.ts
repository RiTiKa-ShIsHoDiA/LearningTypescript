var getSum = (...rest:number[]): number =>{  // rest parameter

   let sum = 0;
   for (let element of rest) {
     sum += element
   } 
   return sum;
}  


console.log(getSum(1,2,3));
console.log(getSum(1,2,3,4,5,6));
console.log(getSum());


