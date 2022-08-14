import React from 'react'
import './Content.css'

const Content = ({ children, className }) => {
    return (
        <div className={`Content ${className}`}>
            {children}
        </div>
    )
}

export default Content