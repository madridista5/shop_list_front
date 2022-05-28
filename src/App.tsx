import React, {useState} from 'react';

import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Main} from "./components/Main/Main";
import {SearchContext} from './contexts/search.context';

export const App = () => {
    const [search, setSearch] = useState('');
    return (
        <SearchContext.Provider value={{search, setSearch}}>
            <div className="wrapper">
                <Header/>
                <Nav/>
                <Main/>
            </div>
        </SearchContext.Provider>
    );
};