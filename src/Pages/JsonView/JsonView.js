import React from 'react'
import Content from "../../Components/Content/Content";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";
import { Link, useLocation } from "react-router-dom";

import "./JsonView.css";

const JsonView = () => {

    const location = useLocation();

    return (
        <div className="JsonView">
            <Header />
            <Content className="JsonView__content">
        
                <div className="">
                    <pre>
                        <code>
                            {JSON.stringify(location.state.selectedData, null, 10)}
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