import React, { useState } from "react";
import { Button, Card, Grid } from "@mui/material";
import { bgcolor } from "@mui/system";
export const BulbModern = () => {
    const [name, setName] = useState("gray")
    return (
        <React.Fragment>
            <Grid container spacing={3} align="center">

                <Grid item xs={4}> </Grid>

                <Grid item xs={4}><Card sx={{ height: 200, width: 200, bgcolor: name }}>
                </Card></Grid>

                <Grid item xs={4}> </Grid>

                <Grid item xs={2}><Button variant="contained" fullWidth sx={{ height: 50 }} onClick={() => setName("green")}>Green</Button></Grid>

                <Grid item xs={2}><Button variant="contained" fullWidth sx={{ height: 50 }} onClick={() => setName("blue")}>Blue</Button></Grid>

                <Grid item xs={2}><Button variant="contained" fullWidth sx={{ height: 50 }} onClick={() => setName("red")}>Red</Button></Grid>

                <Grid item xs={2}><Button variant="contained" fullWidth sx={{ height: 50 }} onClick={() => setName("black")}>Black</Button></Grid>

                <Grid item xs={2}><Button variant="contained" fullWidth sx={{ height: 50 }} onClick={() => setName("yellow")}>Yellow</Button></Grid>

                <Grid item xs={2}><Button variant="contained" fullWidth sx={{ height: 50 }} onClick={() => setName("orange")}>Orange</Button></Grid>

            </Grid>

        </React.Fragment>
    )
}