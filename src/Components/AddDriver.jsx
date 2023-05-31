import React from "react";
import { TextField, Button, Grid } from "@mui/material";
export const AddDriver = () => {
    return (
        <div className="sub">
            <Grid container spacing={3}>
                <Grid item xs={4}><TextField variant="outlined" fullWidth label="First Name" /></Grid>
                <Grid item xs={4}><TextField variant="outlined" fullWidth label="Middle Name" /></Grid>
                <Grid item xs={4}><TextField variant="outlined" fullWidth label="Last name" /></Grid>

                <Grid item xs={6}><TextField variant="outlined" fullWidth label="Mobile Number" /></Grid>
                <Grid item xs={6}><TextField variant="outlined" fullWidth label="Dl Number" /></Grid>

                <Grid item xs={4}></Grid>
                <Grid item xs={4}><Button variant="contained" fullWidth sx={{ height: 50 }}>Submit</Button></Grid>
                <Grid item xs={4}><Button variant="contained" fullWidth sx={{ height: 50 }}>Cancel</Button></Grid>




            </Grid>
        </div>
    )
}
