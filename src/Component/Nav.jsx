import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Button } from '@mui/material'

export const Nav = () => {
    const [data, setData] = useState(["Home", "Service", "Contact", "AboutUs", "Shopping"])
    return (
        <React.Fragment>
            <Grid container spacing={3} align="center">
                {
                    data.map((item) => (
                        <Grid item xs={3}>
                            <Link style={{ textDecoration: 'none' }} to={`${item.toLowerCase()}`}>
                                <Button variant='contained' fullWidth>{item}</Button>
                            </Link>
                        </Grid>
                    ))
                }

            </Grid>


        </React.Fragment>
    )
}
