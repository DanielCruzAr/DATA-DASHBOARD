import { LinearProgress } from "@mui/material";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import React from "react";

const Analytics = () => {
    const { data } = useDemoData({
        dataSet: "Commodity",
        rowLength: 500,
        maxColumns: 15,
    });

    return (
        <>
            <h1>Analytics</h1>
            <p>
                The bestest of data available here at your finger tips in table form.
                This could be a whole section of data that is available for users to 
                deep dive into and analyze.
            </p>
            <div style={{ height: "600px", width: "100%" }}>
                <DataGrid
                    slots={{
                        loadingOverlay: GridOverlay,
                    }}
                    loading={!data}
                    {...data}
                />
            </div>
        </>
    );
};

export default Analytics;
