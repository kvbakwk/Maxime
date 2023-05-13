import { useState, useEffect } from 'react';
import '../styles/initial.css'

import CircleGraph from './graphs/CircleGraph'

const Initial = ({ data }) => {

    const [fullcost, setFullcost] = useState();

    const graphData = {
        labels: data.initial.map(element => element.name),
        datasets: [
            {
                label: 'Cost',
                data: data.initial.map(element => element.cost * element.amount),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 0,
            },
        ],
    };

    useEffect(() => {
        let cost = 0;

        data.initial.forEach(element => {
            cost += element.amount * element.cost
        })

        setFullcost(cost)
    }, [data])

    return (
        <div className="initial">
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Lp.</th>
                            <th>Nazwa</th>
                            <th>Ilość</th>
                            <th>Cena / szt.</th>
                            <th>Koszt całkowity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.initial.map((element, index) => (
                            <tr key={element.name}>
                                <td>{index + 1}</td>
                                <td>{element.name}</td>
                                <td>{element.amount}</td>
                                <td>{element.cost} zł</td>
                                <td>{element.amount * element.cost} zł</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <th style={{ color: 'var(--primary)' }}>Suma</th>
                            <td>{fullcost} zł</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="graph">
                <CircleGraph data={data} graphData={graphData} />
            </div>
        </div>
    );
}

export default Initial;