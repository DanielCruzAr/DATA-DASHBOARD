import { Grid2 as Grid } from "@mui/material";
import React from "react";
import DataCard from "../DataCard";
import scss from "./DataRibbon.module.scss";

const DataRibbon = () => {
    return (
        <Grid container spacing={2} className={scss.dataRibbon}>
            <Grid>
                <DataCard
                    title="Total Sales"
                    value="462"
                    description="The total of all DataSoft products in the current financial year"
                />
            </Grid>
            <Grid>
                <DataCard
                    title="Total value"
                    value="$25,732.53"
                    description="The total value of all DataSoft products in the current financial year"
                />
            </Grid>
            <Grid>
                <DataCard
                    title="Avg. Order Value"
                    value="$159.30"
                    description="The average order value of all DataSoft products in the current financial year"
                />
            </Grid>
            <Grid>
                <DataCard
                    title="Conversion Rate"
                    value="0.61%"
                    description="The conversion rate of all DataSoft products in the current financial year"
                />
            </Grid>
        </Grid>
    );
}

export default DataRibbon;
