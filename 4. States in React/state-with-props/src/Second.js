import React from 'react';
import Paper from "@material-ui/core/Paper";
import TableContainer  from '@material-ui/core/TableContainer';
import Table  from '@material-ui/core/Table';
import TableHead  from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow  from '@material-ui/core/TableRow';
import TableCell  from '@material-ui/core/TableCell';
import { makeStyles, withStyles } from '@material-ui/core';

const useStyles= makeStyles(theme=>({
        root:{
            margin:theme.spacing(5),
            padding:theme.spacing(5),
        },
        tableHead:{
            backgroundColor:theme.palette.common.black,
            color:theme.palette.common.white
        },
        tableBody:{
            backgroundColor:theme.palette.common.white,
            color:theme.palette.common.black
        },
}));

const StyledTableCell=withStyles((theme)=>({
        head:{
            backgroundColor:theme.palette.common.black,
            color:theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
}))(TableCell);


function Second(props){
    const {key1}=props;
    const classes=useStyles();
    return(
        <React.Fragment>
            <Paper>
                <TableContainer>
                    <Table>
                        <TableHead className={classes.tableHead}>
                            <TableRow>
                                <StyledTableCell>S_NO</StyledTableCell>
                                <StyledTableCell>P_ID</StyledTableCell>
                                <StyledTableCell>P_NAME</StyledTableCell>
                                <StyledTableCell>P_COST</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className={classes.tableBody}>
                            {key1.map((element,index)=>(
                                     <TableRow>
                                        <StyledTableCell>{index+1}</StyledTableCell>
                                        <StyledTableCell>{element.pid}</StyledTableCell>
                                        <StyledTableCell>{element.pname}</StyledTableCell>
                                        <StyledTableCell>{element.pcost}</StyledTableCell>
                                     </TableRow>
                            ))}
                           
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </React.Fragment>
    )
}

export default Second;