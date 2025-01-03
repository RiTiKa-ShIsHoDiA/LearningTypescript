// a generic fucntion assign to interface 

// interface GenericToFunc{
//     <Type>(arg : Type):Type;
// }

interface GenericToFunc<Type>{
    (arg : Type):Type;
}

function identity<Type>(arg:Type):Type{
    return arg;
}

const fucn:GenericToFunc<string> = identity

fucn("string");