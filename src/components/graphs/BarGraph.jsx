import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarGraph = ({ data }) => {

    const graphData = {
        labels: ['Full Costs'],
        datasets: [
            {
                label: 'Initial',
                data: [data.initial[0].cost * data.initial[0].amount + data.initial[1].cost * data.initial[1].amount],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Fixed',
                data: [(data.fixed[0].cost * data.fixed[0].amount + data.fixed[1].cost * data.fixed[1].amount) * 12],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return <Bar options={{ responsive: true, scales: { x: { stacked: true }, y: { stacked: true } } }} data={graphData} />;
}

export default BarGraph;