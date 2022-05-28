import React, {SyntheticEvent, useContext, useState} from "react";

import './MapSearchForm.css';
import {SearchContext} from "../../contexts/search.context";

export const MapSearchForm = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [inputVal, setInputVal] = useState('');

    const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={setSearchFromLocalState}>
                <input type="text" placeholder="nazwa produktu" value={inputVal}
                       onChange={e => setInputVal(e.target.value)}/>
                <button>Szukaj</button>
            </form>
        </div>
    );
};