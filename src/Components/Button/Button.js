import React from 'react'

import './Button.css'

const Button = ({ children, className }) => {
    return (
        <button className={`Button ${className}`}>
            {children}
        </button>
    )
}

export default Button