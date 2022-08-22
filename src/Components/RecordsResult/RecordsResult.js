import React, {useContext} from 'react'
import RecordsTable from '../RecordsTable/RecordsTable'
import { SimulatorInputContenxt } from '../../Contexts/Simulator';

const today = new Date();
const dateA = today.toLocaleDateString('en-US');
const timeA = today.toLocaleTimeString('en-US');

const RecordsResult = () => {

    const [{inputFile}] = useContext(SimulatorInputContenxt);

    const recordsResults = [
    
        { id: "s-1", id_record: "1", documentName: inputFile.fileName, date_table: dateA, hour_table: timeA},
        { id: "s-2", id_record: "2", documentName: inputFile.fileName, date_table: dateA, hour_table: timeA},
        { id: "s-3", id_record: "3", documentName: inputFile.fileName, date_table: dateA, hour_table: timeA},
    ];

    return (
        <div className="">
            <div>
                <RecordsTable recordsResults={recordsResults} />
            </div>
        </div>
    )
}

export default RecordsResult