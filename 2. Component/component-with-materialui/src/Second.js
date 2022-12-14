import React from 'react';
import  Button from "@material-ui/core/Button";

function second(){
    return(
        <React.Fragment>
            <Button>Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="error">Secondary</Button>
            <Button disabled>Disabled</Button>

            <br></br><br></br>

            <Button variant="contained">Default</Button>
            <Button color="primary" variant="outlined">Primary</Button>
            <Button color="secondary" variant="outlined">Secondary</Button>
            <Button color="error" variant="outlined">Secondary</Button>
            <Button disabled variant="outlined">Disabled</Button>
            <br></br><br></br>

            <Button size="small" color="primary" variant="outlined">Primary</Button>
            <Button size="medium" color="secondary" variant="outlined">Secondary</Button>
            <Button size="large" color="error" variant="outlined">Secondary</Button>
        </React.Fragment>
    )
}

export default second;