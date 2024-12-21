var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
arr1.push.apply(arr1, arr2); // rest as argument
console.log(arr1);
