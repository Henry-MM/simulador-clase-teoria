import React from 'react'
import './Table.css'

const Table = ({ className, children }) => {
    return (
        <table className={`Table ${className}`}>
            {children}
        </table>
    )
}

export default Table