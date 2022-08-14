import React from 'react'

import './Dev.css'

const Dev = ({ photoURL, alt, name }) => {
    return (
        <div className="Dev">
            <img src={photoURL} alt={alt} className="Dev__photo" />
            <h4 className="Dev__name">{name}</h4>
        </div>
    )
}

export default Dev