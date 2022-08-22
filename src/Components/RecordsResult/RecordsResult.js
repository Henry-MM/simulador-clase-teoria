import React, { useContext } from 'react'
import RecordsTable from '../RecordsTable/RecordsTable'
import { SimulatorOutputContenxt } from '../../Contexts/Simulator';


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