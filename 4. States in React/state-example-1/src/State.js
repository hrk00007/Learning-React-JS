import React,{useState} from 'react';


function State(){
    const [sub,setSub]=useState("REACTJS");

    return(
        <React.Fragment>
            <h2>{sub}</h2>
            <button onClick={()=>{setSub("ReactNative")}}>Change</button>
        </React.Fragment>
    )
}

export default State;