import React, {useState} from 'react';

import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Main} from "./components/Main/Main";
import {SearchContext} from './contexts/search.context';
import {IdContext} from './contexts/id.context';

export const App = () => {
    const [search, setSearch] = useState('');
    const [id, setId] = useState('');

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            <IdContext.Provider value={{id, setId}}>
                <div className="wrapper">
                    <Header/>
                    <Nav/>
                    <Main/>
                </div>
            </IdContext.Provider>
        </SearchContext.Provider>
    );
};