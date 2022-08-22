import React from 'react'
import SimulatorTable from '../SimulatorTable/SimulatorTable'

const simulationResult = [
	{ id: "s-1", month: "Mayo", year: 2022, product: "azucar", quantity: 10, totalSell: 100 },
	{ id: "s-2", month: "Diciembre", year: 2023, product: "azucar", quantity: 10, totalSell: 100 },
	{ id: "s-3", month: "Noviembre", year: 2023, product: "azucar", quantity: 10, totalSell: 100 },
	{ id: "s-4", month: "Noviembre", year: 2023, product: "arroz", quantity: 10, totalSell: 100 },
];

const SimulatorResult = () => {
    return (
        <div className="Simulator__column_content content__table">
            <div>
                <h1>Pronóstico de ventas</h1>
            </div>
            <div>
                <SimulatorTable simulationResult={simulationResult} />
            </div>
        </div>
    )
}

export default SimulatorResult