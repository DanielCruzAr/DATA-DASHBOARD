import React from "react";
import { Box, Grid2 as Grid } from "@mui/material";
import DataRibbon from "@/components/Dashboard/DataRibbon/DataRibbon";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerDay";
import TransactionBottomRow from "@/components/Dashboard/TransactionBottomRow";

const Dashboard = () => {
    return (
        <Box>
            <Grid container spacing={4} marginTop={2}>
                {/* Data Ribbon - showing numerical stats */}
                <Grid size={12}>
                    <DataRibbon />
                </Grid>
                {/* TransactionsPerDay - graph - numerical cards */}
                <Grid size={12}>
                    <TransactionsPerDay />
                </Grid>
                <Grid size={12}>
                    {/* Transaction Doughnut Charts Bottom Row - a few doughnut charts to break down some data into fractions */}
                    <TransactionBottomRow />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
