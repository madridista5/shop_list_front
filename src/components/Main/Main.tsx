import React, {useContext} from "react";

import './Main.css';
import {Route, Routes} from "react-router-dom";
import {Start} from "../Start/Start";
import {Map} from "../Map/Map";
import {AddShopForm} from "../AddShopForm/AddShopForm";
import {AllShopsList} from "../AllShopsList/AllShopsList";
import {SingleShop} from "../SingleShop/SingleShop";
import {IdContext} from "../../contexts/id.context";

export const Main = () => {
    const {id} = useContext(IdContext);

    return <>
        <div className="main">
            <Routes>
                <Route path="/" element={<Start/>}/>
                <Route path="/shops/add" element={<AddShopForm/>}/>
                <Route path="/shops" element={<AllShopsList/>}/>
                <Route path="/map" element={<Map/>}/>
                <Route path="/shops/showSingle/:id" element={<SingleShop id={id}/>}/>
            </Routes>
        </div>
    </>
};