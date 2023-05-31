import React, { useState } from "react";
import { empData } from "./Constant";
import { Grid } from "@mui/material";
import { EmpItem } from "./EmpItem";


export const Emp = () => {
    const [data, setData] = useState(empData);

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                {data.map((item) => (
                    <EmpItem item={item} />
                ))}
            </Grid>
        </React.Fragment>
    )
}