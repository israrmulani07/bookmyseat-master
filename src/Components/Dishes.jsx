import React, { useState } from "react";
import { Grid, Card, CardContent } from "@mui/material";
export const Dishes = () => {

    const [dish, setDish] = useState(["Roti", "Daal", "Chawal", "Baigan", "Tandoori", "Chicken65    "])

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                {
                    dish.map((item) =>
                        <Grid item xs={4}>
                            <Card>
                                <CardContent>
                                    {item}
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                }

            </Grid>
        </React.Fragment>


    )
}