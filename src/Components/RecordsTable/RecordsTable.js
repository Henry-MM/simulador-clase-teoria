import React from 'react'
import Table from '../Table/Table'

const RecordsTable = ({ recordsResults }) => {
    console.log(recordsResults);
    return (
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre del Archivo</th>
                    <th>Producto</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                </tr>
            </thead>
            <tbody>
                {recordsResults.map(({ id, fileName, date, time, result }, i) => (
                    <tr key={id}>
                        <td>{i + 1}</td>
                        <td>{fileName}</td>
                        <td>{result[0].product}</td>
                        <td>{date}</td>
                        <td>{time}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default RecordsTable