import React, {useContext} from "react";

import './AddProductForm.css';
import {IdContext} from "../../contexts/id.context";

export const AddProductForm = () => {
    const {id} = useContext(IdContext);
  return <>
      <h1>Add Product Form. ID: {id}</h1>
  </>
};