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
import { useEffect, useState } from 'react';
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

    const [fullcostFixed, setFullcostFixed] = useState();

    useEffect(() => {
        let cost = 0;

        data.fixed.forEach(element => {
            cost += element.amount * element.cost
        })

        setFullcostFixed(cost)
    }, [data])


    const graphData = {
        labels: ['April', 'May', 'June', 'July', 'Ougust', 'October', 'September', 'November', "December", 'January', 'February', 'March'],
        datasets: [
            {
                fill: true,
                label: 'Koszty początkowe',
                data: [
                    0, data.initial[0].cost * data.initial[0].amount, 0, 0,
                    0, 0, data.initial[1].cost * data.initial[1].amount, 0,
                    0, 0, 0, 0, 0
                ],
                backgroundColor: '#913fe2',
                borderWidth: 0
            },
            {
                fill: true,
                label: 'Koszty stałe',
                data: [
                    fullcostFixed, fullcostFixed, fullcostFixed, fullcostFixed,
                    fullcostFixed, fullcostFixed, fullcostFixed, fullcostFixed,
                    fullcostFixed, fullcostFixed, fullcostFixed, fullcostFixed,
                ],
                backgroundColor: '#4090eb',
                borderWidth: 0
            }
        ],
    };

    return <Line data={graphData} />;
}

export default LineGraph;