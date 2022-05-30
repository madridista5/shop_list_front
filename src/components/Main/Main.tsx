import React from "react";

import './Main.css';
import {Route, Routes} from "react-router-dom";
import {Start} from "../Start/Start";
import {Map} from "../Map/Map";
import {AddShopForm} from "../AddShopForm/AddShopForm";

export const Main = () => {
    return <>
        <div className="main">
            <Routes>
                <Route path="/" element={<Start/>}/>
                <Route path="/shops/add" element={<AddShopForm/>}/>
                <Route path="/shops" element={<h1>Lista sklepów</h1>}/>
                <Route path="/map" element={<Map/>}/>
            </Routes>
        </div>
    </>
};