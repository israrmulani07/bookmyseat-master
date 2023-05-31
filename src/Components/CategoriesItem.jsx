import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
export const CategoriesItem = ({ item }) => {
    return (
        <React.Fragment>
            <Grid item xs={3}>
                <Card sx={{ color: "grey", bgcolor: "black", height: 50, marginTop: 3 }}>
                    <CardContent sx={{ bgcolor: "aqua" }}> <marquee behavior="slow" direction="left"> {item}</marquee></CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    )
}