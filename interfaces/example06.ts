// understand intersection 

interface shape{
    numberOfSide : number
}

interface shapeName{
    shape : string
}

type shapeofObject = shape & shapeName   // this is intersection of two interfaces

var obj1:shapeofObject = {
    numberOfSide : 4 ,
    shape : "rectangle"
}

console.log("Object1 ",obj1);