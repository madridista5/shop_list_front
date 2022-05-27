import React from "react";

import './Main.css';
import {Route, Routes} from "react-router-dom";

export const Main = () => {
    return <>
        <div className="main">
            <Routes>
                <Route path="/" element={<h1>Strona główna</h1>}/>
                <Route path="/add-shop" element={<h1>Dodaj sklep</h1>}/>
                <Route path="/shop-list" element={<h1>Lista sklepów</h1>}/>
                <Route path="/map" element={<h1>Mapa</h1>}/>
            </Routes>
        </div>
    </>
};