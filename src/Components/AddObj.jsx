import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
export const AddObj = ({ item }) => {
    return (
        <React.Fragment>
            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        {item}
                    </CardContent>
                </Card>

            </Grid>
        </React.Fragment>
    )
}

