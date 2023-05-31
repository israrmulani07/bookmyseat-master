import React, { useState } from "react";
import { Grid, Card, CardContent, TextField, Button, } from "@mui/material";
import { AddObj } from "./AddObj"
export const AddObjects = () => {
    const [data, setData] = useState(["Cat", "Bat", "Rat", "Sat"]);
    const [obj, setObj] = useState("");

    const handleAdd = () => {
        setData([...data, obj])

    }
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={8}><TextField variant="outlined" label="Add Object" fullWidth onChange={(e) => setObj(e.target.value)} /></Grid>
                <Grid item xs={4}><Button variant="contained" sx={{ height: 55 }} fullWidth onClick={handleAdd}>Add</Button></Grid>

                {
                    data.map((item) =>

                        <AddObj item={item} />

                    )
                }
            </Grid>
        </React.Fragment >
    )
}