import React from "react";
import {
    Card,
    Grid2 as Grid,
    Paper,
    Typography,
    useTheme,
} from "@mui/material";
import scss from "./TransactionsPerDay.module.scss";
import DataChart from "@/components/DataChart";
import { lineChartData } from "@/components/mockData";

export type TransactionCardType = {
    title: string;
    value: number;
    changeValue: string;
};

const TransactionsPerDay = () => {
    const theme = useTheme();

    return (
        <Grid container spacing={2} className={scss.wrapper}>
            <Paper className={scss.transactions}>
                <div className={scss.chart}>
                    <Typography>Transactions per day</Typography>
                    <DataChart type="line" data={lineChartData} />
                </div>
                <div className={scss.cardWrapper}>
                    <Card className={scss.card} variant="outlined">
                        <div className={scss.cardTitle}>
                            <Typography>Title</Typography>
                        </div>
                        <div className={scss.cardValue}>
                            <Typography>Value</Typography>
                            <Typography
                                color={theme.palette.success.main}
                                fontSize={14}
                            >
                                428.7%
                            </Typography>
                        </div>
                    </Card>
                    <Card className={scss.card} variant="outlined">
                        <div className={scss.cardTitle}>
                            <Typography>Title</Typography>
                        </div>
                        <div className={scss.cardValue}>
                            <Typography>Value 2</Typography>
                            <Typography
                                color={theme.palette.success.main}
                                fontSize={14}
                            >
                                4.42%
                            </Typography>
                        </div>
                    </Card>
                    <Card className={scss.card} variant="outlined">
                        <div className={scss.cardTitle}>
                            <Typography>Title</Typography>
                        </div>
                        <div className={scss.cardValue}>
                            <Typography>Value 3</Typography>
                            <Typography
                                color={theme.palette.success.main}
                                fontSize={14}
                            >
                                0
                            </Typography>
                        </div>
                    </Card>
                </div>
            </Paper>
        </Grid>
    );
};

export default TransactionsPerDay;
