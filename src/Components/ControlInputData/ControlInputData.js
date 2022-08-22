import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom';
import { SimulatorInputContenxt } from '../../Contexts/Simulator';
import { getFileContentAsJSON } from '../../utils/parseFile';
import Button from '../Button/Button';

import './ControlInputData.css'

const ControlInputData = () => {

    const [{ inputFile }, dispatchSimulatorInput] = useContext(SimulatorInputContenxt);

    const fileRef = useRef();

    const handleChangeFile = async (evt) => {

        const [file] = evt.target.files;

        if (file.type !== "application/json") return false;

        const dataJSON = await getFileContentAsJSON(file);

        dispatchSimulatorInput({
            type: "changeInputFile",
            data: {
                file: file,
                data: dataJSON,
                fileName: file.name
            }
        });
    };

    return (
        <div className="ControlInputData__Container">
            <div className="Simulator__buttons_container">
                <button
                    className="blue_btn"
                    onClick={() => fileRef.current.click()}
                >
                    {inputFile.fileName || "Seleccionar Data"}
                </button>

                <input
                    ref={fileRef}
                    onChange={handleChangeFile}
                    multiple={false}
                    type="file"
                    accept="application/json"
                    hidden
                />
            </div>

            <div className="Simulator__buttons_container">
                <Link to="/view">
                    <Button
                        className="blue_btn"
                        disabled={Object.keys(inputFile.data ?? {}).length === 0}
                    >
                        Visualizar Data
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default ControlInputData