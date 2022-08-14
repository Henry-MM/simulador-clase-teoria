import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

import Content from "../../Components/Content/Content";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Dev from "../../Components/Dev/Dev";
import Button from "../../Components/Button/Button";

import "./Simulator.css";

const Simulator = () => {
  const inputRef = useRef(null);

  const fileRef = useRef();

  const handleChange = (e) => {
    const [file] = e.target.files;
    console.log(file);
  };

  return (
    <div className="Simulator">
      <Header />
      <Content className="Simulator__content">
        <div className="">
          <h1>¡Bienvenido al sistema de pronostico de ventas!</h1>
        </div>
        <div className="">
          <h2>
            Nos encargamos de realizar un pronostico de las ventas que su
            negocio puede tener en los proximos meses
          </h2>
        </div>
        <div className="">
          <div className="Simulator__column_content">
            <div className="Simulator__buttons_container">
              <button
                className="start_simulator_btn"
                onClick={() => fileRef.current.click()}
              >
                Buscar Archivo
              </button>
              <input
                ref={fileRef}
                onChange={handleChange}
                multiple={false}
                type="file"
                hidden
              />
            </div>
          </div>
          <div className="Simulator__column_content">
            <div>
              <h1>Pronóstico de ventas</h1>
            </div>
            <h1>Inicio de Tabla</h1>
          </div>
        </div>
      </Content>
      <Footer />
    </div>
  );
};

export default Simulator;
