// for arrow function
function getSearchData<Type>(products : Type[]):Type{
    return products[3]
}

function getSearchItem<T>(data:T[]):T{

    return data[2];
}

// arrow fucntion 

const getSearchItem1 = <T,>(students : T[]): T =>{ // <T,> this syntax denotes this is not any html tag this is generic 

    return students[3];
}
console.log(getSearchItem1([1,2,3,4]));