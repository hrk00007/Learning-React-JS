import React from "react";
import Third from "./Third";
function Second(props){
    // const {key1,key2,key3}=props;
    return(
        // <div>
        //     <h1>{key1}</h1>
        //     <h1>{key2}</h1>
        //     <h1>{key3}</h1>
        // </div>
        <Third {...props}/>
    )
 };

 export default Second;