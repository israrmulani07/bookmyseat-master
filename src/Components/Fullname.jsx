import React, { useState } from "react";
import { TextField, Grid, Card, CardContent } from "@mui/material";

export const Fullname = () => {
    const [fname, setFname] = useState("");
    const [mname, setMname] = useState("");
    const [lname, setLname] = useState("");
    return (
        <React.Fragment>
            <Grid container spacing={3} align="center">

                <Grid item xs={4}><TextField variant="outlined" fullWidth onChange={(e) => setFname(e.target.value)} /> </Grid>

                <Grid item xs={4}><TextField variant="outlined" fullWidth onChange={(e) => setMname(e.target.value)} /> </Grid>

                <Grid item xs={4}><TextField variant="outlined" fullWidth onChange={(e) => setLname(e.target.value)} /> </Grid>

                <Grid item xs={12}>
                    <Card>
                        <CardContent sx={{ fontSize: 50 }}>
                            {`${fname} ${mname} ${lname}`}
                        </CardContent>
                    </Card>
                </Grid>


            </Grid>
        </React.Fragment>
    )
}