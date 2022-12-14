import React from "react";
import Typography from "@material-ui/core/Typography";
function First(){
    return(
        <div>
            <Typography variant="h1" color="intial">Hello 1</Typography>
            <Typography variant="h2" color="inherit" align="center">Hello 2</Typography>
            <Typography variant="subtitle1" color="primary" align="right">Hello 3</Typography>
            <Typography variant="body1" color="error" align="right">Hello 4</Typography>
            <Typography variant="h4" color="secondary" align="right">Hello 5</Typography>
            <Typography variant="h6" color="textPrimary" align="right">Hello 6</Typography>
            <Typography variant="subtitle2" color="textSecondary" align="right">Hello 7</Typography>
        </div>
    )
}
export default First;