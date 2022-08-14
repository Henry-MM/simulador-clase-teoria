import React, { useRef, useState } from "react";

import Content from "../../Components/Content/Content";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Dev from "../../Components/Dev/Dev";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

import "./Simulator.css";

const Simulator = () => {
  const optionsProducts = [
    { label: "ejemplo1", value: "ejemplo1" },
    { label: "ejemplo2", value: "ejemplo2" },
    { label: "ejemplo3", value: "ejemplo3" },
  ];

  const optionsYears = [
    { label: "ejemplo1", value: "ejemplo1" },
    { label: "ejemplo2", value: "ejemplo2" },
    { label: "ejemplo3", value: "ejemplo3" },
  ];

  const optionsMonths = [
    { label: "ejemplo1", value: "ejemplo1" },
    { label: "ejemplo2", value: "ejemplo2" },
    { label: "ejemplo3", value: "ejemplo3" },
  ];

  const [value, setValue] = React.useState("Product");
  const [valueYears, setValueYears] = React.useState("Years");
  const [valueMonths, setValueMonths] = React.useState("Months");

  const handleChangeSelectProduct = (event) => {
    setValue(event.target.value);
  };

  const handleChangeSelectYears = (event) => {
    setValueYears(event.target.valueYears);
  };

  const handleChangeSelectMonths = (event) => {
    setValueMonths(event.target.valueMonths);
  };

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

            {/* DEBE IR OCULTO HASTA QUE EL USUARIO AGREGUE EL JSON */}
            <div className="Simulator__buttons_container">
              <Link to="/view">
                <Button className="start_simulator_btn">Visualizar Data</Button>
              </Link>
            </div>

            <div className="">
              <label className="input__label">
                <p>Nombre del archivo</p>
                <input name="file" id="file" placeholder="Data.json" disabled />
              </label>
            </div>

            <div>
              <label className="dropdown__label">
                Articulo o Producto
                <select value={value} onChange={handleChangeSelectProduct}>
                  {optionsProducts.map((optionsProducts) => (
                    <option value={optionsProducts.value}>
                      {optionsProducts.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div>
              <label className="dropdown__label">
                Seleccione una fecha
                <select value={valueYears} onChange={handleChangeSelectYears}>
                  {optionsYears.map((optionsYears) => (
                    <option value={optionsYears.valueYears}>
                      {optionsYears.label}
                    </option>
                  ))}
                </select>
                <select value={valueMonths} onChange={handleChangeSelectMonths}>
                  {optionsMonths.map((optionsMonths) => (
                    <option value={optionsMonths.value}>
                      {optionsMonths.label}
                    </option>
                  ))}
                </select>
              </label>
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
