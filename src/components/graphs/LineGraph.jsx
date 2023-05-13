import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const LineGraph = ({ data }) => {

    const graphData = {
        labels: ['April', 'May', 'June', 'July', 'Ougust', 'October', 'September', 'November', "December", 'January', 'February', 'March'],
        datasets: [
            {
                fill: true,
                label: 'Initial Costs',
                data: [0, data.initial[0].cost * data.initial[0].amount, 0, 0, 0, 0, data.initial[1].cost * data.initial[1].amount, 0, 0, 0, 0, 0, 0],
                borderColor: 'rgb(53, 162, 235, .4)',
                backgroundColor: 'rgb(53, 162, 235, .4)',
                borderWidth: 0
            },
            {
                fill: true,
                label: 'Fixed Costs',
                data: [
                    data.fixed[0].cost * data.fixed[0].amount + data.fixed[1].cost * data.fixed[1].amount,
                    data.fixed[0].cost * data.fixed[0].amount + data.fixed[1].cost * data.fixed[1].amount,
                    data.fixed[0].cost * data.fixed[0].amount + data.fixed[1].cost * data.fixed[1].amount,
                    data.fixed[0].cost * data.fixed[0].amount + data.fixed[1].cost * data.fixed[1].amount,
                    data.fixed[0].cost * data.fixed[0].amount + data.fixed[1].cost * data.fixed[1].amount,
                    data.fixed[0].cost * data.fixed[0].amount + data.fixed[1].cost * data.fixed[1].amount,
                    data.fixed[0].cost * data.fixed[0].amount + data.fixed[1].cost * data.fixed[1].amount,
                    data.fixed[0].cost * data.fixed[0].amount + data.fixed[1].cost * data.fixed[1].amount,
                    data.fixed[0].cost * data.fixed[0].amount + data.fixed[1].cost * data.fixed[1].amount,
                    data.fixed[0].cost * data.fixed[0].amount + data.fixed[1].cost * data.fixed[1].amount,
                    data.fixed[0].cost * data.fixed[0].amount + data.fixed[1].cost * data.fixed[1].amount,
                    data.fixed[0].cost * data.fixed[0].amount + data.fixed[1].cost * data.fixed[1].amount
                ],
                borderColor: 'rgba(255, 99, 132, .4)',
                backgroundColor: 'rgba(255, 99, 132, .4)',
                borderWidth: 0
            }
        ],
    };

    return <Line data={graphData} />;
}

export default LineGraph;