import React from 'react'
import ControlInputData from '../ControlInputData/ControlInputData'
import ControlSelectDate from '../ControlSelectDate/ControlSelectDate'
import ControlSelectProduct from '../ControlSelectProduct/ControlSelectProduct'

const SimulatorControls = () => {

    return (
        <div className="Simulator__column_content content__controls">
            <ControlInputData />
            <ControlSelectProduct />
            <ControlSelectDate />
        </div>
    )
}

export default SimulatorControls