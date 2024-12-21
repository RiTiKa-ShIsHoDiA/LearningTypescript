function printData1({num1,num2=0}:{num1:number,num2?:number}){ //default ,optional parameter
   console.log("the value of num1 is",num1);
   console.log("the value of num2 is",num2);
}

printData1({num1:23,num2:23});
printData1({num1:23}); // pass one arg due to default parameter 
