import React, {useEffect, useState} from "react";
import {AllProductsShopsData} from "types";

import './AllProductsList.css';
import {apiUrl} from "../../config/api";

export const AllProductsList = () => {
    const [data, setData] = useState<AllProductsShopsData[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/allData`);
            const data = await res.json();
            setData(data);
        })();
    }, []);

    return <>
        <h1>All Products List</h1>
        <ul>
            {
                data.map(record => (<li key={record.shopId}>
                    <span>Nazwa produktu: {record.productName}, </span><span>Cena produktu: {record.productPrice} zł, </span><span>Opis Produktu: {record.description}, </span><span>Nazwa sklepu: {record.shopName}, </span><span>Kategoria sklepu: {record.category}, </span><span>Url: {record.url}.</span>
                </li>))
            }
        </ul>
    </>
};