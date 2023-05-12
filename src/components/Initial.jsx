import '../styles/initial.css'

const Initial = ({ data }) => {

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
                </table>
            </div>
            <div className="graph">

            </div>
        </div>
    );
}

export default Initial;