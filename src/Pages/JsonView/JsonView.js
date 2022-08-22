import React, { useContext } from 'react'
import Content from "../../Components/Content/Content";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

import "./JsonView.css";
import { SimulatorInputContenxt } from '../../Contexts/Simulator';

const JsonView = () => {

    const [inputData, dispatchSimulatorInput] = useContext(SimulatorInputContenxt);
    const { inputFile } = inputData;

    return (
        <div className="JsonView">
            <Header />
            <Content className="JsonView__content">

                <div className="">
                    <pre>
                        <code>
                            {JSON.stringify(inputFile.data, null, 10)}
                        </code>
                    </pre>
                </div>

                <div className="JsonView__buttons_container">
                    <Link to="/simulator">
                        <Button className="start_jsonView_btn">Regresar</Button>
                    </Link>
                </div>

            </Content>

            <Footer />

        </div>
    )
}

export default JsonView