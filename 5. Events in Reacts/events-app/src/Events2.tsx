import { TextField } from '@material-ui/core';
import React from 'react';
import {Button} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

function login(username:string,password:string):any{
    if(username==='hrk007' && password==='hrk@123'){
        alert('Login Success');
    }else{
        alert('Login Failed');
    }
}

function Event(){
    return (
        <React.Fragment>
            <Button variant='contained' color='primary' onClick={()=>{login("hrk007","hrk@123")}}>Login</Button>
        </React.Fragment>
    )
}


export default Event;