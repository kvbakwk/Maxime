import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const CircleGraph = ({ graphData }) => {
  return <Pie data={graphData} />;
};

export default CircleGraph;
