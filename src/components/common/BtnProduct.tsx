import React from "react";

import './BtnProduct.css';

interface Props {
    text: string;
}

export const BtnProduct = (props: Props) => {
    return <button className="btn-product" type={"submit"}>{props.text}</button>
}