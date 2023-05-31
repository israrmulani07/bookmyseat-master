import React, { useState } from "react";
import { Grid, Card, CardContent, TextField, Button, } from "@mui/material";
import { AddDishItem } from "./AddDishItem"
export const AddDishes = () => {
    const [data, setData] = useState(["Roti", "Chawal", "Daal"]);
    const [dish, setDish] = useState("")

    const handleAdd = () => {
        setData([...data, dish])
    }

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={8}><TextField variant="outlined" label="Add Dish" onChange={(e) => setDish(e.target.value)} fullWidth /></Grid>
                <Grid item xs={4}><Button variant="contained" sx={{ height: 55 }} fullWidth onClick={handleAdd}>Add</Button></Grid>

                {
                    data.map((item) => (
                        <AddDishItem item={item} />
                    )
                    )
                }
            </Grid>
        </React.Fragment >
    )
}