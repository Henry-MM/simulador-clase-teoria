import React from 'react'
import './Header.css'

const Header = ({ className }) => {
    return (
        <header className={`Header ${className}`}>
            <p>Proyecto Final</p>
        </header>
    )
}

export default Header