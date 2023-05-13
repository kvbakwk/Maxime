import '../styles/main.css'
import data from '../data.json'
import Initial from './Initial'
import LineGraph from './graphs/LineGraph';
import BarGraph from './graphs/BarGraph';

const Main = () => {
    return (
        <div className="main">
            <Initial data={data} />
            <div className="graphs">
                <LineGraph data={data} />
                <BarGraph data={data} />
            </div>
        </div>
    );
};


export default Main;