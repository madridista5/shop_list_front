import React, {useContext} from "react";
import {Link} from "react-router-dom";

import './Btn.css';
import {SearchContext} from "../../contexts/search.context";

interface Props {
    text: string;
    to: string;
}

export const Btn = (props: Props) => {
    const {setSearch} = useContext(SearchContext);

    return (
        <Link type="submit" className="btn" to={props.to} onClick={() => setSearch('')}>{props.text}</Link>
    );
};