import React, { useState, useEffect } from "react"
import { Grid, Card, CardContent } from "@mui/material"
import axios from 'axios'
import { CategoriesItem } from "./CategoriesItem";

export const Categories = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const result = await axios.get("https://fakestoreapi.com/products/categories")
        setData(result.data)
    }
    useEffect(() => {
        getData();

    }, [])




    return (
        <>
            <Grid container spacing={1}>
                {data.map((item) => (
                    <CategoriesItem item={item} />
                ))}



            </Grid>



        </>

    );
};