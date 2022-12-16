import React,{useState} from 'react';
import Second from './Second';

const obj={
    products:[
                {pid:111,pname:"DisplayFusion",pcost:1999.99},
                {pid:112,pname:"AnyDesk",pcost:2739.129},
                {pid:113,pname:"Google Drive",pcost:1239.12},
                {pid:114,pname:"Youtube",pcost:3244.423},
                {pid:115,pname:"VS CODE",pcost:1424.99},
                {pid:116,pname:"Intelij IDea Ultimate",pcost:3421.52}
             ]
}
function First(){
    const[data,setData] =useState(obj);
    return(

        <Second key1={data.products}></Second>
    );
}

export default First;