import React from "react";

import './Nav.css';
import {Btn} from "../common/Btn";

export const Nav = () => {
  return <>
      <nav className="nav">
          <div className="div-wrapper">
              <Btn text="Start" to="/"/>
              <Btn text="Dodaj sklep" to="/add-shop"/>
              <Btn text="Lista sklepów" to="/shop-list"/>
              <Btn text="Mapa" to="/map"/>
          </div>
      </nav>
  </>;
};