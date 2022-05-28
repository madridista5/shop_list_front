import React from "react";

import './Main.css';
import {Route, Routes} from "react-router-dom";
import {Start} from "../../Start/Start";
import {Map} from "../Map/Map";

export const Main = () => {
    return <>
        <div className="main">
            <Routes>
                <Route path="/" element={<Start/>}/>
                <Route path="/add-shop" element={<h1>Dodaj sklep</h1>}/>
                <Route path="/shop-list" element={<h1>Lista sklepów</h1>}/>
                <Route path="/map" element={<Map/>}/>
            </Routes>
        </div>
    </>
};