import React, {useContext, useEffect, useState} from "react";

import './AllShopsList.css';
import {apiUrl} from "../../config/api";
import { ShopEntity } from "types";
import {MapSearchForm} from "../Map/MapSearchForm";
import {SearchContext} from "../../contexts/search.context";
import {BtnProduct} from "../common/BtnProduct";
import {IdContext} from "../../contexts/id.context";
import {AddProductForm} from "../AddProductForm/AddProductForm";

interface ShopEntityWithSearchProductData extends ShopEntity {
    productName?: string,
    productPrice?: number,
}

export const AllShopsList = () => {
    const {search, setSearch} = useContext(SearchContext);
    const {id, setId} = useContext(IdContext);
    const [shops, setShops] = useState<ShopEntityWithSearchProductData[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/shops`);
            const shops = await res.json();
            setShops(shops);
            setSearch('');
            setId('');
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

    if(id) {
        return <AddProductForm/>;
    }

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
                            <form onSubmit={() => setId(shop.id)} className="form">
                                <BtnProduct text="Dodaj produkt"/>
                            </form>
                    </li>))
                }
            </div>
        </div>
    </>;
};