import React from "react";

import './MapSearchForm.css';

export const MapSearchForm = () => {
  return (
      <div className="form-wrapper">
          <form>
              <input type="text" placeholder="nazwa produktu"/>
              <button>Szukaj</button>
          </form>
      </div>
  );
};