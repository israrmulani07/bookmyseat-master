import React, { useState } from "react";
import { Button, Grid, Card, CardContent } from "@mui/material"
export const Animal = () => {
    const [name, setName] = useState("Fox")
    return (
        <React.Fragment>
            <Grid container spacing={4} align="center">
                <Grid item xs={2}> </Grid>
                <Grid item xs={8}>
                    <Card>
                        <CardContent>
                            <img src={`Wilanimal/${name}.jpg`} style={{ height: 400, width: 600 }} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}> </Grid>
                <Grid item xs={2}><Button variant="contained" sx={{ height: 50 }} fullWidth onClick={() => setName("Camel")}>Camel</Button></Grid>
                <Grid item xs={2}><Button variant="contained" sx={{ height: 50 }} fullWidth onClick={() => setName("Chipmunk")}>Chipmunk</Button></Grid>
                <Grid item xs={2}><Button variant="contained" sx={{ height: 50 }} fullWidth onClick={() => setName("Fox")}>Fox</Button></Grid>
                <Grid item xs={2}><Button variant="contained" sx={{ height: 50 }} fullWidth onClick={() => setName("Jiraaf")}>Jiraaf</Button></Grid>
                <Grid item xs={2}><Button variant="contained" sx={{ height: 50 }} fullWidth onClick={() => setName("Lion")}>Lion</Button></Grid>
                <Grid item xs={2}><Button variant="contained" sx={{ height: 50 }} fullWidth onClick={() => setName("Cat")}>Cat</Button></Grid>

            </Grid>

        </React.Fragment>
    )
}