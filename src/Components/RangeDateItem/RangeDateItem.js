import { Select } from '@chakra-ui/react';
import React, { useLayoutEffect, useState } from 'react'
import { getMonthsSelectFormat, getMonthsSelectFormatFromCurrentDate, getYearsFromCurrent } from '../../Helpers/simulatorUI';
import './RangeDateItem.css'

const RangeDateItem = ({ type, date, onChangeDate }) => {

    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [monthsOptions, setMonthOptions] = useState(getMonthsSelectFormat());
    const [yearsOptions, setYearOptions] = useState(getYearsFromCurrent());

    useLayoutEffect(() => {
        if (type === "start") {
            setMonthOptions(getMonthsSelectFormatFromCurrentDate());
        }
    }, [type])

    const onChangeMonth = (evt) => {
        setMonth(evt.target.value);
        onChangeDate(type, evt.target.value, year)
    }

    const onChangeYear = (evt) => {
        setYear(evt.target.value)
        onChangeDate(type, month, evt.target.value)
    }

    return (
        <div className="rangeDateItem customSelectStyle">

            <Select
                variant='flushed'
                placeholder='Select option'
                onChange={onChangeMonth}
                value={date.month || ""}
            >
                {monthsOptions.map(({ id, label, value }) => (
                    <option
                        value={value}
                        key={id}
                    >
                        {label}
                    </option>
                ))}
            </Select>

            <Select
                variant='flushed'
                placeholder='Select option'
                onChange={onChangeYear}
                value={date.year || ""}
            >
                {yearsOptions.map(({ id, label, value }) => (
                    <option
                        value={value}
                        key={id}
                    >
                        {label}
                    </option>
                ))}
            </Select>
        </div>
    )
}

export default RangeDateItem