//union in function 

function getDetails2(id : string | number ): string | number{ 
    // id.toLowerCase(); need to check type because id have number 
    if(typeof id === "string")
        return id.toLowerCase() ;
    else 
      return id;

    console.log("id is ",id);
}

getDetails2("1");
getDetails2(2);