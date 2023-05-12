import '../styles/main.css'
import data from '../data.json'

import Initial from './Initial'

const Main = () => {
    return (
        <div className="main">
            <Initial data={data} />
        </div>
    );
};


export default Main;