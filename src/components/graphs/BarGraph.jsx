import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
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

    const [fullcostInitial, setFullcostInitial] = useState([]);
    const [fullcostVariable, setFullcostVariable] = useState([]);
    const [fullcostFixed, setFullcostFixed] = useState([]);

    useEffect(() => {
        let initial = 0
        let variable = 0
        let fixed = 0

        data.initial.forEach(element => {
            initial += element.cost * element.amount
        })

        data.fixed.forEach(element => {
            fixed += element.amount * element.cost * 12
        })

        data.variable.forEach(element => {
            element.cost.forEach(cost => {
                variable += cost
            })
        })

        setFullcostInitial(initial)
        setFullcostFixed(fixed)
        setFullcostVariable(variable)
    }, [data])

    const graphData = {
        labels: ['Rok', 'Miesiąc'],
        datasets: [
            {
                label: 'Koszty początkowe',
                data: [fullcostInitial, fullcostInitial / 12],
                backgroundColor: '#913fe2bb',
                borderRadius: 3,
            },
            {
                label: 'Koszty stałe',
                data: [fullcostFixed, fullcostFixed / 12],
                backgroundColor: '#4090ebbb',
                borderRadius: 3,
            },
            {
                label: 'Koszty zmienne',
                data: [fullcostVariable, fullcostVariable / 12],
                backgroundColor: '#ffffffbb',
                borderRadius: 3,
            }
        ],
    };

    return <Bar options={{ responsive: true, scales: { x: { stacked: true }, y: { stacked: true } } }} data={graphData} />;
}

export default BarGraph;