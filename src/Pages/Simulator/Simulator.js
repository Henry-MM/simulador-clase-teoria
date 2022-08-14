import React from 'react'
import Content from '../../Components/Content/Content'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Dev from '../../Components/Dev/Dev'

import './Simulator.css'

const Simulator = () => {
    return (
        <div className="Simulator">
            <Header />
            <Content className="Simulator__content">
                <div>SimulatorA</div>


            </Content>
            <Footer/>
        </div>
    )
}

export default Simulator