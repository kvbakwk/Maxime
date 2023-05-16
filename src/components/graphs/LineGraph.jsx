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

    const [fullcostInitial, setFullcostInitial] = useState([]);
    const [fullcostFixed, setFullcostFixed] = useState([]);
    const [fullcostVariable, setFullcostVariable] = useState([]);

    useEffect(() => {
        let arrayInitial = []
        let arrayVariable = []
        let arrayFixed = []
        let one = 0

        for (let i = 0; i < 12; i++) {
            for (let element of data.initial) {
                if (element.month === i)
                    one = one + element.cost * element.amount
            }
            arrayInitial.push(one)
            one = 0
        }

        one = 0

        data.fixed.forEach(element => {
            one += element.amount * element.cost
        })
        for (let i = 0; i < 12; i++) {
            arrayFixed.push(one)
        }

        one = 0

        for (let i = 0; i < 12; i++) {
            for (let element of data.variable) {
                one += element.cost[i]
            }
            arrayVariable.push(one)
            one = 0
        }

        setFullcostInitial(arrayInitial)
        setFullcostFixed(arrayFixed)
        setFullcostVariable(arrayVariable)
    }, [data])


    const graphData = {
        labels: ['Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', "Listopad", 'Grudzień', "Styczeń", "Luty", "Marzec"],
        datasets: [
            {
                fill: true,
                label: 'Koszty początkowe',
                data: fullcostInitial.map(element => element),
                backgroundColor: '#913fe2bb',
                tension: 0.2,
                borderWidth: 0
            },
            {
                fill: true,
                label: 'Koszty stałe',
                data: fullcostFixed.map(element => element),
                backgroundColor: '#4090ebbb',
                tension: 0.2,
                borderWidth: 0
            },
            {
                fill: true,
                label: 'Koszty zmienne',
                data: fullcostVariable.map(element => element),
                backgroundColor: '#ffffffbb',
                tension: 0.2,
                borderWidth: 0
            }
        ],
    };

    return <Line data={graphData} />;
}

export default LineGraph;