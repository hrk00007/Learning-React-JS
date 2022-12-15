import React from 'react';
import Test2 from "./Test2";

const arr=['Angular','React','Vue'];
const obj={key1:"AngularJS",key2:"ReactJS",key3:"VueJS"};

function Test1(){
    return(
        <React.Fragment>
        <Test2 key1={arr} key2={obj}/>
       </React.Fragment>
    )
}

export default Test1;