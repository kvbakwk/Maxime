import { useState, useEffect } from "react";

import CircleGraph from "../graphs/CircleGraph";

const Variable = ({ data, show }) => {
  const [cost, setCost] = useState([]);
  const [fullcost, setFullcost] = useState(0);

  useEffect(() => {
    let costFull = 0;
    let costOne = 0;
    let array = [];

    data.variable.forEach((variable) => {
      variable.cost.forEach((costL) => {
        costFull += costL;
        costOne += costL;
      });
      array.push(costOne);
      costOne = 0;
    });

    setCost(array);
    setFullcost(costFull);
  }, [data]);

  const graphData = {
    labels: data.variable.map((element) => element.name),
    datasets: [
      {
        label: "Koszty",
        data: data.variable.map((element, index) => cost[index]),
        backgroundColor: ["#4090eb", "#ffffff", "#913fe2"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div
      className="variable costs"
      style={show ? { opacity: 1, zIndex: 100 } : { opacity: 0, zIndex: 0 }}>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Lp.</th>
              <th>Nazwa</th>
              <th>Koszt / rok</th>
            </tr>
          </thead>
          <tbody>
            {data.variable.map((element, index) => (
              <tr key={element.name}>
                <td>{index + 1}</td>
                <td>{element.name}</td>
                <td>{cost[index]} zł</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <th style={{ color: "var(--primary)" }}>Suma</th>
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
};

export default Variable;
