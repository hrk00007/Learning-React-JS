import React,{useState} from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import DisplayTable from './DisplayTable';

function GetEx(){

    const [countries,setCountries]:any= useState([]);

    function getCountries():any{
        axios.get("https://restcountries.com/v2/all")
        .then((postResponse)=>{
            setCountries(postResponse.data);
           
        },(errRes)=>{
            console.log(errRes);
        })
        
    }

    return(
        <React.Fragment>
            <Button variant="contained" color="secondary"  onClick={()=>{getCountries()}}>Countries</Button>
            <DisplayTable key1={countries}/>
        </React.Fragment>
    )   
}

export default GetEx;

