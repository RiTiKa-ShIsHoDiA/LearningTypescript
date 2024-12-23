//tuples allow to push but its bad approach 

var error:readonly [string,number] = ["OK",404]   //restrict that approach push is not allowed  after add readonly and its correct approach compiler give error but it would not give any error

error.push("run_time error") ; // why allow to push it restrictive 

console.log(error[1]);

console.log(error.length);


