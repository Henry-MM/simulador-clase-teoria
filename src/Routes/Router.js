import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from '../App'
import Introduction from '../Pages/Introduction/Introduction';
import JsonView from '../Pages/JsonView';
import Simulator from '../Pages/Simulator/Simulator';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Introduction />} />
                    <Route path="/simulator" element={<Simulator />} />
                    <Route path="/view" element={<JsonView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router