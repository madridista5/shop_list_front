import React, {useEffect, useState} from "react";

import './AllShopsList.css';
import {apiUrl} from "../../config/api";
import { ShopEntity } from "types";
import {Link} from "react-router-dom";

export const AllShopsList = () => {
    const [shops, setShops] = useState<ShopEntity[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/shops`);
            const shops = await res.json();
            setShops(shops);
        })();
    }, []);

    return <div className="shops-wrapper">
        <h2>Lista sklepów</h2>
        <div className="single-shop-wrapper">
            {
                shops.map(shop => (<li key={shop.id}>
                    <p>Nazwa: {shop.name}</p>
                    <p>Kategoria: {shop.category}</p>
                    {shop.url && <p>Adres URL: <a href={shop.url}>{shop.url}</a></p>}
                    {/*<p>Lista produktów:</p>*/}
                    {/*add new component with all products*/}
                    <p className="last-p">
                            <Link to="/test" className="link">Edytuj</Link>
                            <Link to="/test" className="link">Usuń</Link>
                            <Link to="/test" className="link">Szczegóły</Link>
                    </p>
                </li>))
            }
        </div>
    </div>;
};