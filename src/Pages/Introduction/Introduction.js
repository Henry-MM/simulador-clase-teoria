import React from 'react'
import Content from '../../Components/Content/Content'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import './Introduction.css'

const Introduction = () => {
    return (
        <div className="Introduction">
            <Header />
            <Content className="Introduction__content">
                <div className="Introduction__logos">
                    
                </div>
                <div className="Introduction__project_info">

                </div>
                <div className="Introduction__devs_container">

                </div>
                <div className="Introduction__buttons_container">

                </div>
            </Content>
            <Footer />
        </div>
    )
}

export default Introduction