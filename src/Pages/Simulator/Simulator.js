import React, { useRef, useState } from "react";

import Content from "../../Components/Content/Content";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

import "./Simulator.css";
import SimulatorTable from "../../Components/SimulatorTable/SimulatorTable";
import { getFileContentAsJSON } from "../../utils/parseFile";

const getYearsFromCurrent = (quantity = 5) => {

	const currentYear = new Date().getFullYear();
	const yearsFormat = []

	for (let index = 0; index < quantity; index++) {

		const year = currentYear + index;

		yearsFormat.push({
			id: "y-" + year,
			label: year,
			value: year,
		});
	}

	return yearsFormat;
}

const optionsProducts = [
	{ id: "p-1", label: "ejemplo1", value: "ejemplo1" },
	{ id: "p-2", label: "ejemplo2", value: "ejemplo2" },
	{ id: "p-3", label: "ejemplo3", value: "ejemplo3" },
];

const optionsMonths = [
	{ id: "m-Enero", label: "Enero", value: "Enero" },
	{ id: "m-Febrero", label: "Febrero", value: "Febrero" },
	{ id: "m-Marzo", label: "Marzo", value: "Marzo" },
	{ id: "m-Abril", label: "Abril", value: "Abril" },
	{ id: "m-Mayo", label: "Mayo", value: "Mayo" },
	{ id: "m-Junio", label: "Junio", value: "Junio" },
	{ id: "m-Julio", label: "Julio", value: "Julio" },
	{ id: "m-Agosto", label: "Agosto", value: "Agosto" },
	{ id: "m-Septiembre", label: "Septiembre", value: "Septiembre" },
	{ id: "m-Octubre", label: "Octubre", value: "Octubre" },
	{ id: "m-Noviembre", label: "Noviembre", value: "Noviembre" },
	{ id: "m-Diciembre", label: "Diciembre", value: "Diciembre" }
];

const simulationResult = [
	{ id: "s-1", month: "Mayo", year: 2022, product: "azucar", quantity: 10, totalSell: 100 },
	{ id: "s-2", month: "Diciembre", year: 2023, product: "azucar", quantity: 10, totalSell: 100 },
	{ id: "s-3", month: "Noviembre", year: 2023, product: "azucar", quantity: 10, totalSell: 100 },
	{ id: "s-4", month: "Noviembre", year: 2023, product: "arroz", quantity: 10, totalSell: 100 },
];


const Simulator = () => {

	const [product, setProduct] = useState("Product");
	const [valueYears, setValueYears] = useState("Years");
	const [valueMonths, setValueMonths] = useState("Months");
	const [selectedFile, setSelectedfile] = useState(null);
	const [selectedData, setSelectedData] = useState(null);

	const handleChangeSelectProduct = (evt) => {
		setProduct(evt.target.value);
	};

	const handleChangeSelectYears = (evt) => {
		setValueYears(evt.target.valueYears);
	};

	const handleChangeSelectMonths = (evt) => {
		setValueMonths(evt.target.valueMonths);
	};

	const fileRef = useRef();

	const handleChange = async (evt) => {

		const [file] = evt.target.files;
		setSelectedfile(file);

		if (file.type !== "application/json") return false;

		const dataJSON = await getFileContentAsJSON(file);
		setSelectedData(dataJSON);
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
					<div className="Simulator__column_content content__controls">
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
								accept="application/json"
								hidden
							/>
						</div>

						{selectedFile &&
							<div className="Simulator__buttons_container">
								<Link to="/view" state={{selectedData}}>
									<Button className="start_simulator_btn">Visualizar Data</Button>
								</Link>
							</div>
						}

						<div className="file-name__wrapper">
							<label className="input__label">
								<p>Nombre del archivo</p>
								{/* <input name="file" id="file" value={selectedFile} disabled /> */}
								<p className="file-name" title={selectedFile?.name ?? ''}>{selectedFile?.name ?? "Data.json"}</p>
							</label>
						</div>

						<div>
							<label className="dropdown__label">
								Articulo o Producto
								<select value={product} onChange={handleChangeSelectProduct}>
									{optionsProducts.map(({ id, label, value }) => (
										<option
											value={value}
											key={id}
										>
											{label}
										</option>
									))}
								</select>
							</label>
						</div>

						<div>
							<label className="dropdown__label">
								Seleccione una fecha
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
							</label>
						</div>
					</div>
					<div className="Simulator__column_content content__table">
						<div>
							<h1>Pronóstico de ventas</h1>
						</div>
						<div>
							<SimulatorTable simulationResult={simulationResult} />
						</div>
					</div>
				</div>
			</Content>

			<Footer />
		</div>
	);
};

export default Simulator;
