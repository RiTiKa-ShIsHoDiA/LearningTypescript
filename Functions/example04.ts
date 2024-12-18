//optional parameter 

function sumOfNum(a:number,b:number,c?:number){  
   return a+b+ (c || 0);
}

console.log(sumOfNum(2,3));