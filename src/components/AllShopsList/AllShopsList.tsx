import React, {useContext, useEffect, useState} from "react";

import './AllShopsList.css';
import {apiUrl} from "../../config/api";
import { ShopEntity } from "types";
import {Link} from "react-router-dom";
import {MapSearchForm} from "../Map/MapSearchForm";
import {SearchContext} from "../../contexts/search.context";

interface ShopEntityWithSearchProductData extends ShopEntity {
    productName?: string,
    productPrice?: number,
}

export const AllShopsList = () => {
    const {search} = useContext(SearchContext);
    const [shops, setShops] = useState<ShopEntityWithSearchProductData[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/shops`);
            const shops = await res.json();
            setShops(shops);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/shops/${search}`);
            const data: ShopEntity[] = await res.json();
            const newData = data.map(shop => ({
                ...shop,
                productName: search,
                // productPrice: ??),
            })) as ShopEntityWithSearchProductData[];
            setShops(newData);
        })();
    }, [search]);

    return <>
        <MapSearchForm/>
        <div className="shops-wrapper">
            <h2>Lista sklepów</h2>
            <div className="single-shop-wrapper">
                {
                    shops.map(shop => (<li key={shop.id}>
                        <p>Nazwa: {shop.name}</p>
                        <p>Kategoria: {shop.category}</p>
                        {shop.url && <p>Adres URL: <a href={shop.url}>{shop.url}</a></p>}
                        {shop.productName && <p>Produkt: {shop.productName}</p>}
                        <p className="last-p">
                            <Link to="/test" className="link">Edytuj</Link>
                            <Link to="/test" className="link">Usuń</Link>
                            <Link to="/test" className="link">Szczegóły</Link>
                        </p>
                    </li>))
                }
            </div>
        </div></>;
};