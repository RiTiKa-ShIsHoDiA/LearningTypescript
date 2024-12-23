// tuple helps to storing multiple type of data but array does not do 

// const userId:(string | number)[] = [1,"hello"]; // we can do like that but this is not restrict for index oriented
// const userId:(string | number)[] = ["hello",4]; // allow but in restrict oriented index not allow 

const cords:[string,number] = ["1",2];

console.log(cords);

// const [name1,id] = userId  // destructuring