import React, { useState } from "react";
import { Grid, Card, CardContent } from "@mui/material";
export const ObjectData = () => {
    const [data, setData] = useState(["cat", "bat", "mat", "jat", "tat", "rat"])
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                {
                    data.map((item) =>
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