import React from 'react';

function Test2(props){
    const {key1, key2}=props;
    return(
        <React.Fragment>
              
                {key1.map((element,index)=>(
                    <p>{element}...{index}</p>
                ))}
                <br></br><br></br>
                <p>{key2.key1}</p>
                <p>{key2.key2}</p>
                <p>{key2.key3}</p>
                <p>{JSON.stringify(key2)}</p>
        </React.Fragment>
    )
}

export default Test2;