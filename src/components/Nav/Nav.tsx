import React from "react";

import './Nav.css';
import {Btn} from "../common/Btn";

export const Nav = () => {
  return <>
      <nav className="nav">
          <div className="div-wrapper">
              <Btn text="start" to="/"/>
              <Btn text="Dodaj sklep" to="/shops/add"/>
              <Btn text="Lista sklepów" to="/shops"/>
              <Btn text="Produkty" to="/products"/>
              <Btn text="Mapa" to="/map"/>
          </div>
      </nav>
  </>;
};