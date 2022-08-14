import React from 'react'
import './Header.css'

const Header = ({ className }) => {
    return (
        <header className={`Header ${className}`}>
            <p>Pronóstico de Ventas</p>
        </header>
    )
}

export default Header