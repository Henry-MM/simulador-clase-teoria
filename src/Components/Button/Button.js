import React from 'react'

import './Button.css'

const Button = ({ children, className, ...morePros }) => {
    return (
        <button className={`Button ${className}`} {...morePros}>
            {children}
        </button>
    )
}

export default Button