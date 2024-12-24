// enum E{
//     A = Math.random(),
//     B    // must be intialized all enum values if one is assign 
// }

const enum hetrogenouseNums{   // mix of numeric or string allow but technically no used
    No = 0,
    YES = 1
}   
// reverse mapping { '0': 'No', '1': 'YES', No: 0, YES: 1 } in numeric revrse mapping happens 

console.log(hetrogenouseNums);


//const enums are not compile in js code 