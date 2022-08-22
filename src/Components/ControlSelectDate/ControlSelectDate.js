import React, { useContext } from 'react'
import { SimulatorInputContenxt } from '../../Contexts/Simulator';
import RangeDateItem from '../RangeDateItem/RangeDateItem';
import './ControlSelectDate.css'


const ControlSelectDate = () => {

    const [inputData, dispatchSimulatorInput] = useContext(SimulatorInputContenxt);
    const { dates } = inputData;

    const onChangeDate = (type, month, year) => {

        dispatchSimulatorInput({
            type: type === "start" ? "changeDateStart" : "changeDateEnd",
            data: {
                dates:{
                    month: month,
                    year: year
                }
            }
        })
    };

    return (
        <div>
            <label className="dropdown__label">
                Seleccione rango de fecha
                <div className="range_date_wrapper">
                    <RangeDateItem
                        type="start"
                        date={dates.start}
                        onChangeDate={onChangeDate} />
                    <span className="dates_separator">-</span>
                    <RangeDateItem
                        type="end"
                        date={dates.end}
                        onChangeDate={onChangeDate} />
                </div>
            </label>
        </div>
    )
}

export default ControlSelectDate

/*
    <select value={valueYears} onChange={handleChangeSelectYears}>
        {getYearsFromCurrent().map(({ id, label, value }) => (
            <option
                value={value}
                key={id}
            >
                {label}
            </option>
        ))}
    </select>
    <select value={valueMonths} onChange={handleChangeSelectMonths}>
        {optionsMonths.map(({ value, label, id }) => (
            <option
                value={value}
                key={id}
            >
                {label}
            </option>
        ))}
    </select>
*/