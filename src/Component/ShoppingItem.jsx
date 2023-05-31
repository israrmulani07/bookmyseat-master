import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, TextField, Badge, Card, CardContent, Rating } from '@mui/material'

export const ShoppingItem = ({ item }) => {
    return (
        <React.Fragment>

            <Grid item xs={3}>
                <Card sx={{ bgcolor: "lightsteelblue", border: "solid", borderRadius: 5 }}>
                    <CardContent>
                        <Grid container spacing={2} align="center">
                            <Grid item xs={12}>
                                <Badge badgeContent={`$ ${item.price}`} max={9999}>
                                    <img src={item.image} width={100} height={100} />
                                </Badge>
                            </Grid>
                            <Grid item xs={12}>
                                {item.category}
                            </Grid>
                            <Grid item xs={12}>
                                {item.title.slice(0, 15).trim() + "...."}
                            </Grid>
                            <Grid item xs={8}>
                                <Rating value={item.rating.rate} />
                            </Grid>
                            <Grid item xs={4}>
                                {item.rating.count}
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>

        </React.Fragment >
    )
}
