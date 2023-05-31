import React, { useState } from "react";
import { Grid, Card, CardContent } from "@mui/material";
export const FruitsObj = () => {
    const [fruit, setFruit] = useState(["Mango", "Apple", "Grapes", "Pineapple", "cherry", "Orange"])
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                {
                    fruit.map((item) =>


                        < Grid item xs={4}>
                            <Card>
                                <CardContent>
                                    {item}
                                </CardContent>
                            </Card>
                        </Grid>
                    )}
            </Grid>
        </React.Fragment >
    )
}