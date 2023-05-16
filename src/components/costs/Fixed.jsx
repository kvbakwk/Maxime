import { useState, useEffect } from 'react';

import CircleGraph from '../graphs/CircleGraph'

const Fixed = ({ data, show }) => {

    const [fullcost, setFullcost] = useState();

    useEffect(() => {
        let cost = 0;

        data.fixed.forEach(element => {
            cost += element.amount * element.cost
        })

        setFullcost(cost)
    }, [data])

    const graphData = {
        labels: data.fixed.map(element => element.name),
        datasets: [
            {
                label: 'Koszty',
                data: data.fixed.map(element => element.cost * element.amount),
                backgroundColor: [
                    '#ffffff',
                    '#913fe2',
                    '#000000',
                    "#4090eb",
                ],
                borderWidth: 0,
            },
        ],
    };

    return (
        <div className="fixed costs" style={show ? { opacity: 1, zIndex: 100 } : { opacity: 0, zIndex: 0 }}>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Lp.</th>
                            <th>Nazwa</th>
                            <th>Ilość</th>
                            <th>Koszt / miesiąc</th>
                            <th>Koszt całkowity / miesiąc</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.fixed.map((element, index) => (
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

export default Fixed;