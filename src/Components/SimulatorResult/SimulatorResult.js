import React, { useContext } from 'react'
import { SimulatorInputContenxt, SimulatorOutputContenxt } from '../../Contexts/Simulator';
import { startSimulation } from '../../Helpers/simulation';
import Button from '../Button/Button';
import SimulatorTable from '../SimulatorTable/SimulatorTable'
import "./SimulatorResult.css";

/* import Button from "../../Components/Button/Button"; */
import { Link } from "react-router-dom";

import './SimulatorResult.css'

const simulationResult = [
    { id: "s-1", month: "Mayo", year: 2022, product: "azucar", quantity: 10, totalSell: 100 },
    { id: "s-2", month: "Diciembre", year: 2023, product: "azucar", quantity: 10, totalSell: 100 },
    { id: "s-3", month: "Noviembre", year: 2023, product: "azucar", quantity: 10, totalSell: 100 },
    { id: "s-4", month: "Noviembre", year: 2023, product: "arroz", quantity: 10, totalSell: 100 },
];

const formatResult = function (result) {

    const formatted = result.map(yearResult => {

        return Object.entries(yearResult.data).map(([month, data], i) => {
            return {
                id: "s-" + i,
                month: month,
                year: yearResult.año,
                product: yearResult.producto,
                quantity: data.cantidad,
                totalSell: data.ventas
            }
        })
    })

    return formatted;
}

const SimulatorResult = () => {

    const [inputData, dispatchSimulatorInput] = useContext(SimulatorInputContenxt);
    const [outputData, dispatchSimulatorOutput] = useContext(SimulatorOutputContenxt);

    const handleOnClick = () => {

        const predictionResult = startSimulation(inputData);
        const resultformat = formatResult(predictionResult);

        console.log("MIRAA", resultformat);

        dispatchSimulatorOutput({
            type: "simulateResult",
            data: {
                result: resultformat.flat()
            }
        })
    }

    return (
        <div className="Simulator__column_content content__table">
            <div>
                <h1>Pronóstico de ventas</h1>
            </div>
            <div>
                <SimulatorTable simulationResult={simulationResult} />
            </div>
            <div>
                <Link to="/records">
                    <Button className="start_simulatorResult_btn">Prueba de Corridas</Button>
                </Link>
            </div>
            <h1>Pronóstico de ventas</h1>
            <SimulatorTable simulation={outputData[outputData.length - 1] || []} />
            <Button
                className="blue_btn"
                onClick={handleOnClick}
            >
                Iniciar!
            </Button>
        </div>
    )
}

export default SimulatorResult