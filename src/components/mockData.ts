import { months } from "@/helper/Util";

const labels = months({ count: 7 });

export const lineChartData = {
    labels,
    datasets: [
        {
            label: "Sales",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
        },
    ],
};

export const doughnutChartData = {
    labels: ["Green", "Blue", "Red"],
    datasets: [
        {
            label: "Transaction Dataset",
            data: [100, 300, 50],
            backgroundColor: [
                "#66bb6a",
                "rgb(75, 192, 192)",
                "#A41045",
            ],
            hoverOffset: 4,
        },
    ],
};
