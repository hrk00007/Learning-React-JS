import React from 'react';
import Button from '@material-ui/core/Button';
function my_fun():void{
    alert("Hello world!");
}
function Events(){
    
    return(
            <React.Fragment>
                <Button variant='outlined' color='secondary' onClick={my_fun}>ClickMe</Button>    
            </React.Fragment>
    )
}

export default Events;