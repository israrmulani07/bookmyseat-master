import React, { useState, useEffect } from "react"
import { TextField, Grid, Card, CardContent } from "@mui/material"

export const TypeOfName = () => {

    const [name, setName] = useState("")
    const [msg, setMsg] = useState("")

    useEffect(() => {
        name.length < 3 && setMsg("Invalid");
        name.length > 3 && name.length < 6 && setMsg("Short Name");
        name.length > 6 && name.length < 11 && setMsg("Mid");
        name.length > 11 && name.length < 21 && setMsg("Big");
        name.length > 21 && setMsg("Invalid");


    }, [name, msg])

    return (
        <React.Fragment>
            <Grid container spacing={3}  >

                <Grid item xs={12}> <TextField variant="outlined" label="Name" fullWidth onChange={(e) => setName(e.target.value)} /> </Grid>

                <Grid item xs={12}>
                    <Card>
                        <CardContent align="center">
                            {msg}
                        </CardContent>
                    </Card>
                </Grid>


            </Grid>
        </React.Fragment>

    )
}