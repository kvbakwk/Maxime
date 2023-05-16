import { useState, useEffect } from 'react';

import CircleGraph from '../graphs/CircleGraph'

const Initial = ({ data, show }) => {

    const [fullcost, setFullcost] = useState();

    useEffect(() => {
        let cost = 0;

        data.initial.forEach(element => {
            cost += element.amount * element.cost
        })

        setFullcost(cost)
    }, [data])

    const graphData = {
        labels: data.initial.map(element => element.name),
        datasets: [
            {
                label: 'Koszty',
                data: data.initial.map(element => element.cost * element.amount),
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
        <div className="initial costs" style={show ? { opacity: 1, zIndex: 100 } : { opacity: 0, zIndex: 0 }}>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Lp.</th>
                            <th>Nazwa</th>
                            <th>Ilość</th>
                            <th>Koszt / szt.</th>
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