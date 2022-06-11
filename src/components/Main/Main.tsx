import React, {useContext} from "react";

import './Main.css';
import {Route, Routes} from "react-router-dom";
import {Start} from "../Start/Start";
import {Map} from "../Map/Map";
import {AddShopForm} from "../AddShopForm/AddShopForm";
import {AllShopsList} from "../AllShopsList/AllShopsList";
import {AllProductsList} from "../AllProductsList/AllProductsList";

export const Main = () => {

    return <>
        <div className="main">
            <Routes>
                <Route path="/" element={<Start/>}/>
                <Route path="/shops/add" element={<AddShopForm/>}/>
                <Route path="/shops" element={<AllShopsList/>}/>
                <Route path="/map" element={<Map/>}/>
                <Route path="/products" element={<AllProductsList/>}/>
            </Routes>
        </div>
    </>
};