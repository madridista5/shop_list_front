import React, {useEffect, useState} from "react";
import { ShopEntity } from "types";
import {apiUrl, domain} from "../../config/api";

interface Props {
    id: string,
}

export const SingleShopView = (props: Props) => {
    const [shop, setShop] = useState<ShopEntity | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/shops/single/${props.id}`);
            const data = await res.json();
            setShop(data);
        })();
    },[]);

    if(shop === null) {
        return <p>Wczytywanie...</p>;
    }

    return <>
        <h2>Nazwa: {shop.name}</h2>
        <p>Kategoria: {shop.category}</p>
        <p>{!!shop.url && <p>Adres www: {shop.url}</p>}</p>
        <p>Szczegóły: <a href={`${domain}/shops/showSingle/${props.id}`}>Klik</a></p>
    </>
};