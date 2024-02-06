import "../styles/main.css";
import "../styles/costs.css";
import data from "../data.json";

import Initial from "./costs/Initial";
import Fixed from "./costs/Fixed";
import Variable from "./costs/Variable";

import LineGraph from "./graphs/LineGraph";
import BarGraph from "./graphs/BarGraph";

const Main = ({ costsType }) => {
  return (
    <div className="main">
      <Initial data={data} show={costsType === 0} />
      <Fixed data={data} show={costsType === 1} />
      <Variable data={data} show={costsType === 2} />
      <div className="graphs">
        <LineGraph data={data} />
        <BarGraph data={data} />
      </div>
    </div>
  );
};

export default Main;
