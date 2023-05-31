import React, { useState } from "react";
import { Button, Grid, Card, CardContent, } from "@mui/material";

export const Bulb = () => {
    const [name, setName] = useState("black")
    return (
        <React.Fragment>
            <Grid container spacing={3} align="center">
                <Grid ietm xs={4}> </Grid>

                <Grid ietm xs={4}>
                    <Card sx={{ height: 100, width: 100, bgcolor: name }} >
                    </Card>
                </Grid>

                <Grid item xs={4}></Grid>

                <Grid item xs={3}></Grid>
                <Grid item xs={3}><Button variant="contained" fullWidth sx={{ height: 60 }} onClick={() => setName("red")} >On</Button></Grid>
                <Grid item xs={3}><Button variant="contained" fullWidth sx={{ height: 60 }} onClick={() => setName("black")}> Off</Button></Grid>
                <Grid item xs={3}></Grid>





            </Grid>

        </React.Fragment >
    )
}