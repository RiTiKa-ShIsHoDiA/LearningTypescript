const getMax = (...rest : number[]): number =>{ //rest parameter
   return Math.max(...rest) //rest
}

console.log(getMax(1,10,2,30));
console.log(getMax(1,10,2,300));
console.log(getMax(1,1000,2,20));

