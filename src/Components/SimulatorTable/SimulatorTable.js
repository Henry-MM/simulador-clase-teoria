import React from 'react'
import { getCurrencyFormat } from '../../utils/formatNumber';
import Table from '../Table/Table'

const getTotal = (result) => {

    if (!Array.isArray(result))
        return getCurrencyFormat(0);

    const total = result.reduce((total, item) => {
        const newTotal = total + item.totalSell;
        return newTotal;
    }, 0);

    return getCurrencyFormat(total ?? 0);
}

const SimulatorTable = ({ simulation }) => {

    return (
        <Table>
            <thead>
                <tr>
                    <th>Mes</th>
                    <th>Año</th>
                    <th>Articulo</th>
                    <th>Cantidad de Articulos</th>
                    <th>Total Ventas</th>
                </tr>
            </thead>
            <tbody>
                {simulation?.result?.map(({ id, month, year, product, quantity, totalSell }) => (
                    <tr key={id} hidden={quantity === 0}>
                        <td>{month}</td>
                        <td>{year}</td>
                        <td>{product}</td>
                        <td>{quantity}</td>
                        <td>{getCurrencyFormat(totalSell)}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3"><strong>Total</strong></td>
                    <td colSpan="2">{getTotal(simulation?.result || 0)}</td>
                </tr>
            </tfoot>
        </Table>
    )
}

export default SimulatorTable