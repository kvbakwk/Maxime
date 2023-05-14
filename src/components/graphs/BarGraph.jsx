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
        labels: ['Rok', 'Miesiąc'],
        datasets: [
            {
                label: 'Koszty początkowe',
                data: [data.initial[0].cost * data.initial[0].amount + data.initial[1].cost * data.initial[1].amount, (data.initial[0].cost * data.initial[0].amount + data.initial[1].cost * data.initial[1].amount) / 12],
                backgroundColor: '#913fe2',
            },
            {
                label: 'Koszty stałe',
                data: [(data.fixed[0].cost * data.fixed[0].amount + data.fixed[1].cost * data.fixed[1].amount) * 12, data.fixed[0].cost * data.fixed[0].amount + data.fixed[1].cost * data.fixed[1].amount],
                backgroundColor: '#4090eb',
            },
        ],
    };

    return <Bar options={{ responsive: true, scales: { x: { stacked: true }, y: { stacked: true } } }} data={graphData} />;
}

export default BarGraph;