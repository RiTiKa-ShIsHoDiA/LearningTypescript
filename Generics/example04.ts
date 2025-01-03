// concatenate two category 

function concatenate<T,U>(first:T,Second:U):T&U{
    return {...first,...Second};
}

console.log(concatenate("hello",[1,2,3,4]));

{
    // 0:'h', these value are overwrite becoz object have unique keys 
    // 1:'e',
    // 2:'l',
    // 3:'l',
    //main output 
    // 4:'o',
    // 0:1,
    // 1:2,
    // 2:3,
    // 3:4,
}

export {}