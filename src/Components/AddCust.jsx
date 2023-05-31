import React from "react";
import { TextField, Button, Grid } from "@mui/material";
export const AddCust = () => {
    return (
        <div className="sub">
            <Grid container spacing={3}>

                <Grid item xs={3}><TextField variant="outlined" label="First Name" fullWidth /></Grid>

                <Grid item xs={3}><TextField variant="outlined" label="Last Name" fullWidth /></Grid>

                <Grid item xs={3}><TextField variant="outlined" label="Mobile Number" fullWidth /></Grid>

                <Grid item xs={3}><Button variant="contained" fullWidth sx={{ height: 55 }} >Submit</Button></Grid>



            </Grid>

        </div>
    )
}