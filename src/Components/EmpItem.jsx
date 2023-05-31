import React from "react"
import { Grid, Card, CardContent } from "@mui/material"

export const EmpItem = ({ item }) => {
    return (
        <React.Fragment>
            <Grid item xs={3}>
                <Card>
                    <CardContent>{`${item.fname} ${item.mname} ${item.lname}`}</CardContent>

                    <CardContent>age:{item.age}</CardContent>

                    <CardContent>City:{item.city}</CardContent>

                    <CardContent>Gender:{item.Gender}</CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    )
}