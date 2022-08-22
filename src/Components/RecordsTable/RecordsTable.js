import React from 'react'
import { getCurrencyFormat } from '../../utils/formatNumber';
import Table from '../Table/Table'

const RecordsTable = ({ recordsResults }) => {

    return (
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre del Archivo</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                </tr>
            </thead>
            <tbody>
                {recordsResults.map(({ id, id_record,documentName, date_table, hour_table }) => (
                    <tr key={id}>
                        <td>{id_record}</td>
                        <td>{documentName}</td>
                        <td>{date_table}</td>
                        <td>{hour_table}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default RecordsTable