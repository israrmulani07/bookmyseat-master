import React from "react";
import { TextField, Button, Grid } from "@mui/material";
export const Vehical = () => {
    return (
        <div className="sub">
            <Grid container spacing={3}>
                <Grid item xs={4}><TextField variant="outlined" label="Vehical Name" fullWidth /></Grid>
                <Grid item xs={4}><TextField variant="outlined" label="Vehical Number" fullWidth /></Grid>
                <Grid item xs={4}><Button variant="contained" fullWidth sx={{ height: 55 }}>Submit</Button></Grid>
            </Grid>
        </div>
    )
}