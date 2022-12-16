import React,{useState} from 'react';
import Typography from '@material-ui/core/Typography';
import  Button  from '@material-ui/core/Button';
import TableContainer   from '@material-ui/core/TableContainer';
import Table   from '@material-ui/core/Table';
import TableHead   from '@material-ui/core/TableHead';
import TableBody   from '@material-ui/core/TableBody';
import TableRow  from '@material-ui/core/TableRow';
import TableCell   from '@material-ui/core/TableCell';
import {makeStyles} from "@material-ui/core";

const useStyles=makeStyles({
    c1:{
        backgroundColor:"grey"
    },
    c2:{
        backgroundColor:"black"
    },
});

function SecondState(){
    const [pid,setPid]=useState(111);
    const [pname,setPname]=useState("DisplayFusion");
    const [pcost,setPcost]=useState(1200.00);
    const classes=useStyles();

    function myFun(){
        setPid(222);
        setPname("AnyDesk");
        setPcost(1800.00);
    };

    return(
        <React.Fragment>
                 <TableContainer >
                    <Table>
                        <TableHead className={classes.c1}>
                            <TableRow>
                                <TableCell><Typography variant="h6" color="primary">P_ID</Typography></TableCell>
                                <TableCell><Typography variant="h6" color="primary">P_NAME</Typography></TableCell>
                                <TableCell><Typography variant="h6" color="primary">P_COST</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className={classes.c2} >
                            <TableRow>
                                <TableCell><Typography variant="subtitle2" color="secondary">{pid}</Typography></TableCell>
                                <TableCell><Typography variant="subtitle2" color="secondary">{pname}</Typography></TableCell>
                                <TableCell><Typography variant="subtitle2" color="secondary" >{pcost}</Typography></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                 </TableContainer>

                 <Button onClick={myFun} color="primary" variant="contained">Change</Button>
        </React.Fragment>
    )
}

export default SecondState;