import React, { useState, useEffect } from "react";
import { Grid, Button, Card, CardContent, Icon } from "@mui/material";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
export const Indicator = () => {
    const [speed, setSpeed] = useState(0);
    const [clr, setClr] = useState("green");
    useEffect(() => {
        speed < 50 && setClr("green")
        speed > 50 && speed < 70 && setClr("yellow")
        speed > 70 && setClr("red")
    }, [speed])
    return (

        <React.Fragment>

            <Grid container spacing={3} align="center">

                <Grid item xs={12}>
                    <Card sx={{ bgcolor: clr, height: 200, width: 200, borderRadius: 50 }}> </Card>
                </Grid>

                <Grid item xs={12}> </Grid>
                <Grid item xs={4}><Button variant="contained" disabled={speed === 120} onClick={() => setSpeed(speed + 5)} sx={{ height: 70, color: clr }} fullWidth><ArrowCircleUpIcon /></Button></Grid>

                <Grid item xs={4}><Card sx={{ fontSize: 20, fontweight: "bold", bgcolor: "lightgray", color: clr }}><CardContent>{speed}</CardContent></Card></Grid>

                <Grid item xs={4}><Button variant="contained" disabled={speed === 0} onClick={() => setSpeed(speed - 5)} sx={{ height: 70, color: clr }} fullWidth><ArrowCircleDownIcon /></Button></Grid>


            </Grid>

        </React.Fragment >
    )
}

/*UseEffect:-
 step1 -
    import React{useState,useEffect}from "react"
  
  step2- 
    usage---> useeffect(()=>{

    },[speed])
    /////////////////////////////////
    useEffect is special kind of hook which is used for monitoring purpose, it is a lifecylce hook;
    it has two argument- (1)- callback Function  (2)- Dependency Array 

*/