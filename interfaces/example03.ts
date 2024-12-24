type plane = {
   x:number,
   y:number,
//    getNumber : ()=> string
}

// type plane = {    // not allow to add new property in type like interfaces 
//     z:number,
  
// }


type threeDplane = plane & {  //inheritance in typescript 
    z:number,
}

let plane1:threeDplane = {   
   x:1,
   y:2,
   z:3
}