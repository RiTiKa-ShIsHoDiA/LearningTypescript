//destructuring in tuples

function getCoordinates(cord:[number,number]){
    const [ x,y] = cord;  
    console.log(x,y);
}

getCoordinates([20,30]);