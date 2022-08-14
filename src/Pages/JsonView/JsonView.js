import React from 'react'
import Content from "../../Components/Content/Content";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

import "./JsonView.css";

const JsonView = () => {
    return (
        <div className="JsonView">
            <Header />
            <Content className="JsonView__content">
                <div className="JsonView__buttons_container">
                    <Link to="/simulator">
                        <Button className="start_jsonView_btn">Regresar</Button>
                    </Link>
                </div>

                <div className="">
                    <h1>
                        Aqui debe ir el Json
                    </h1>
                </div>

            </Content>

            <Footer />

        </div>
    )
}

export default JsonView