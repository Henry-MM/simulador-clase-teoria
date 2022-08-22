import React, { useContext } from 'react'
import RecordsTable from '../RecordsTable/RecordsTable'
import { SimulatorInputContenxt, SimulatorOutputContenxt } from '../../Contexts/Simulator';

const today = new Date();
const dateA = today.toLocaleDateString('en-US');
const timeA = today.toLocaleTimeString('en-US');

const RecordsResult = () => {

    const [outputData, dispatchSimulatorOutput] = useContext(SimulatorOutputContenxt);

    return (
        <div className="">
            <div>
                <RecordsTable recordsResults={outputData} />
            </div>
        </div>
    )
}

export default RecordsResult