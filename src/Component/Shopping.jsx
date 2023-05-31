import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Grid, TextField } from '@mui/material'
import { ShoppingItem } from './ShoppingItem';

export const Shopping = () => {
    const [data, setData] = useState([])
    const [txt, setTxt] = useState("")
    const [oridata, setOridata] = useState([])

    const getData = async () => {
        const result = await axios.get("https://fakestoreapi.com/products")
        setData(result.data)
        setOridata(result.data)
    }

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        const filtered = oridata.filter((item) => item.title.toUpperCase().includes(txt.toUpperCase()))
        setData(filtered)


    }, [txt])


    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField variant="outlined" fullWidth label="Search...." onChange={(e) => setTxt(e.target.value)}></TextField>
                </Grid>
                {
                    data.map((item) => (
                        <ShoppingItem item={item} />
                    ))
                }
            </Grid>
        </React.Fragment >
    )
}
