import React, { useState, useEffect } from "react";
import { Grid, Button, Card, CardContent, Icon } from "@mui/material";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
export const DayLight = () => {
    const [speed, setSpeed] = useState(1);
    const [clr, setClr] = useState("black");
    useEffect(() => {
        speed > 0 && speed < 5 && setClr("black")
        speed > 5 && speed < 8 && setClr("grey")
        speed > 8 && speed < 18 && setClr("white")
        speed > 18 && speed < 20 && setClr("coral")
        speed > 20 && setClr("black")
    }, [speed])

    useEffect(() => {
        const dt = new Date();
        const hrs = dt.getHours();
        setSpeed(hrs);
    }, [])
    return (

        <React.Fragment>

            <Grid container spacing={3} align="center">

                <Grid item xs={12}>
                    <Card sx={{ bgcolor: clr, height: 200, width: 200, borderRadius: 50 }}> </Card>
                </Grid>

                <Grid item xs={12}> </Grid>
                <Grid item xs={4}><Button variant="contained" disabled={speed === 24} onClick={() => setSpeed(speed + 1)} sx={{ height: 70, color: clr }} fullWidth><ArrowCircleUpIcon /></Button></Grid>

                <Grid item xs={4}><Card sx={{ fontSize: 20, fontweight: "bold", bgcolor: "lightgray", color: clr }}><CardContent>{speed}</CardContent></Card></Grid>

                <Grid item xs={4}><Button variant="contained" disabled={speed === 1} onClick={() => setSpeed(speed - 1)} sx={{ height: 70, color: clr }} fullWidth><ArrowCircleDownIcon /></Button></Grid>


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

    empty dependency:- []-----> Empty Dependency--- When ComponentDid Mount 
    Dependency array with Dependency:- [speed]----->whenever dependency get changed----> ComponentDidUpdate
    

3 phases of lifecycle-
    1-componentDidMount
    1-componentDidUpdate
    1-componentWillUnmount
*/