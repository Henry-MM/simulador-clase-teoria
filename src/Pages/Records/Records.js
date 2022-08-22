import React, {useState} from "react";
import Content from "../../Components/Content/Content";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

import "./Records.css";

import RecordsResult from "../../Components/RecordsResult/RecordsResult";

import "./Records.css";

const Records = () => {

  return (
    <div className="Records">
      <Header />
      <Content className="Records__content">
        <div className="title">
          <h1>Captura de corridas realizadas</h1>
        </div>
        <RecordsResult />
        <div className="Records__buttons_container">
          <Link to="/simulator">
            <Button className="start_records_btn">Regresar</Button>
          </Link>
        </div>
      </Content>

      <Footer />
    </div>
  );
};

export default Records;
