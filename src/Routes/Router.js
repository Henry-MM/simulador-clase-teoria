import React, { useMemo, useReducer } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from '../App'
import { SimulatorInputContenxt, SimulatorOutputContenxt } from '../Contexts/Simulator';
import Introduction from '../Pages/Introduction/Introduction';
import JsonView from '../Pages/JsonView/JsonView';
import Simulator from '../Pages/Simulator/Simulator';
import Records from '../Pages/Records/Records';
import { defaultSimulatorDataInput, defaultSimulatorDataOutput, reduceSimulatorInputs, reduceSimulatorOutputs } from '../Reducers/Simulator';


const Router = () => {

    const [simulatorInputs, dispatchSimulatorInput] = useReducer(reduceSimulatorInputs, defaultSimulatorDataInput);
    const [simulatorOutputs, dispatchSimulatorOutput] = useReducer(reduceSimulatorOutputs, defaultSimulatorDataOutput);

    const providerInputValue = useMemo(() => [simulatorInputs, dispatchSimulatorInput], [simulatorInputs, dispatchSimulatorInput])
    const providerOutputValue = useMemo(() => [simulatorOutputs, dispatchSimulatorOutput], [simulatorOutputs, dispatchSimulatorOutput])

    console.log(providerInputValue);

    return (
        <BrowserRouter>
            <SimulatorInputContenxt.Provider value={providerInputValue}>
                <SimulatorOutputContenxt.Provider value={providerOutputValue}>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route path="/" element={<Introduction />} />
                            <Route path="/simulator" element={<Simulator />} />
                            <Route path="/view" element={<JsonView />} />
                            <Route path="/records" element={<Records />} />
                        </Route>
                    </Routes>
                </SimulatorOutputContenxt.Provider>
            </SimulatorInputContenxt.Provider>
        </BrowserRouter>
    )
}

export default Router