import React, { useEffect, useRef } from 'react'
import { ChartConfiguration, registerables } from 'chart.js'
import { Chart } from 'chart.js';
import { darkOptions } from './Themes';
import { months } from '@/helper/Util';

const DataChart = (props: ChartConfiguration) => {
    const { data, options } = props;
    const chartRef = useRef<HTMLCanvasElement>(null);
    const labels = months({ count: 7 });

    useEffect(() => {
        if (chartRef.current) {
            const chart = new Chart(chartRef.current, {
                ...props,
                options: {
                    ...options,
                    ...darkOptions,
                },
            });
            return () => {
                chart.destroy();
            };
        }
    }, [data]);
    return <canvas ref={chartRef} />;
};
Chart.register(...registerables);

export default DataChart