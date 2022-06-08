import React, {useContext, useEffect, useState} from "react";

import './AllShopsList.css';
import {apiUrl} from "../../config/api";
import { ShopEntity } from "types";
import {MapSearchForm} from "../Map/MapSearchForm";
import {SearchContext} from "../../contexts/search.context";
import {BtnProduct} from "../common/BtnProduct";

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

            let newData = data.map(shop => ({
                ...shop,
                productName: search,
            })) as ShopEntityWithSearchProductData[];

            if(search) {
                for (let i = 0; i < newData.length; i++) {
                    const resProductData = await fetch(`${apiUrl}/products/singleProduct/${data[i].id}/${search}`);
                    const productData = await resProductData.json();

                    newData[i] = {
                        ...newData[i],
                        productPrice: productData[0].price,
                    };
                }
            }

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
                        {(shop.productName && shop.productPrice) && <p className="search-product">Produkt: {shop.productName}, Cena: {shop.productPrice.toFixed(2)} zł.</p>}
                        <p className="last-p">
                            <form action="">
                                <BtnProduct text="Dodaj produkt"/>
                                <BtnProduct text="Zobacz produkty"/>
                            </form>
                        </p>
                    </li>))
                }
            </div>
        </div></>;
};