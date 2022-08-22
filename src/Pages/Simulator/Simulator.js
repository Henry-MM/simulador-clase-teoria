import React, { useReducer } from "react";

import Content from "../../Components/Content/Content";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SimulatorControls from "../../Components/SimulatorControls/SimulatorControls";
import SimulatorResult from "../../Components/SimulatorResult/SimulatorResult";

import "./Simulator.css";


const Simulator = () => {

	return (
		<div className="Simulator">
			<Header />

			<Content className="Simulator__content">
				<SimulatorControls />
				<SimulatorResult />
			</Content>

			<Footer />
		</div>
	);
};

export default Simulator;
