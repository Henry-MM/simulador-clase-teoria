import React from 'react'
import './Footer.css'

const Footer = ({ className }) => {
    return (
        <footer className={`Footer ${className}`}>
            <p>2022 © Grupo - Teoría de la Simulación</p>
        </footer>
    )
}

export default Footer