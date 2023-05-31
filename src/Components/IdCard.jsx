import React from "react";
import { Grid, Avatar, Card, CardContent, Button, } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import CarRentalIcon from '@mui/icons-material/CarRental';

export const IdCard = () => {
    return (
        <Card >
            <CardContent align="center">
                <Grid container spacing={3}>

                    <Grid item xs={4} alignSelf={"end"}>
                        <Avatar src="img/Driver.jpg" variant="square" />
                    </Grid>

                    <Grid item xs={4} >
                        <Avatar sx={{ height: 100, width: 100 }} src="img/User.jpg" />
                    </Grid>

                    <Grid item xs={4} alignSelf={"end"}>
                        <Avatar src="img/IndiaAmb.jpg" variant="square" />
                    </Grid>

                    <Grid item xs={12} ><Button color="error" sx={{ fontSize: 30 }}>KAMAL KISHORE SHARMA</Button></Grid>

                    <Grid item xs={4} align="right">
                        <PhoneIcon />
                    </Grid>
                    <Grid item xs={8} align="left"><Button sx={{ fontSize: 30, height: 20 }}>9822408293</Button></Grid>

                    <Grid item xs={4} align="right">
                        <CarRentalIcon />
                    </Grid>

                    <Grid item xs={8} align="left">
                        <Button sx={{ fontSize: 25, height: 30 }} >MM6678985445237</Button>
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}
