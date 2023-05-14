import '../styles/main.css'
import data from '../data.json'
import Initial from './Initial'
import LineGraph from './graphs/LineGraph';
import BarGraph from './graphs/BarGraph';
import Fixed from './Fixed';

const Main = ({ type }) => {
    return (
        <div className="main">
            <Initial data={data} show={type === 0} />
            <Fixed data={data} show={type === 1} />
            <div className="graphs">
                <LineGraph data={data} />
                <BarGraph data={data} />
            </div>
        </div>
    );
};


export default Main;