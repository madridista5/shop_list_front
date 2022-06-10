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

    return <div className="products-list">
        <h1>Lista produktów</h1>
        <table>
            <thead>
            <tr>
                <th>Nazwa produktu</th>
                <th>Cena prdutku</th>
                <th>Opis produktu</th>
                <th>Nazwa sklepu</th>
                <th>Kategoria sklepu</th>
                <th>Url</th>
            </tr>
            </thead>
            <tbody>
            {
                data.map(record => (<tr key={record.shopId}>
                    <td>{record.productName}</td>
                    <td>{record.productPrice}</td>
                    <td>{record.description}</td>
                    <td>{record.shopName}</td>
                    <td>{record.category}</td>
                    <td>{record.url}</td>
                </tr>))
            }
            </tbody>
        </table>
    </div>
};