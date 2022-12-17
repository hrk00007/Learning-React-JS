import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react';

function DisplayTable(props: { key1: any; }){
    const {key1}=props;
    
    return(
        <React.Fragment>
        <Paper>
        <TableContainer>
            <Table>
                <TableHead>
                        <TableRow>
                            <TableCell>NAME</TableCell>
                            <TableCell>CAPITAL</TableCell>
                            <TableCell>REGION</TableCell>
                            <TableCell>NATIVENAME</TableCell>
                            <TableCell>POPULATION</TableCell>
                            <TableCell>FLAG</TableCell>
                        </TableRow>
                </TableHead>
                <TableBody>
                    {key1.map((element:any,index:any)=>(
                            <TableRow>
                            <TableCell>{index+1}</TableCell>
                            <TableCell>{element.name}</TableCell>
                            <TableCell>{element.capital}</TableCell>
                            <TableCell>{element.region}</TableCell>
                            <TableCell>{element.nativeName}</TableCell>
                            <TableCell>{element.population}</TableCell>
                            <TableCell><img width="100" height="50" src={element.flag}/></TableCell>
                        </TableRow>
                    ))}
                        
                </TableBody>
            </Table>
        </TableContainer>
        </Paper>
        </React.Fragment>
    )
}


export default DisplayTable;