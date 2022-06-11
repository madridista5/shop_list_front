import React, {useEffect, useState} from "react";
import {ShopEntity, SimplyProductEntity} from "types";
import {apiUrl} from "../../config/api";

interface Props {
    id: string,
}

export const SingleShopView = (props: Props) => {
    const [shop, setShop] = useState<ShopEntity | null>(null);
    const [products, setShopProducts] = useState<SimplyProductEntity[] | null>(null);

    useEffect(() => {
        (async () => {
            const resShop = await fetch(`${apiUrl}/shops/single/${props.id}`);
            const dataShop = await resShop.json();
            setShop(dataShop);

            const resProducts = await fetch(`${apiUrl}/products/singleShop/${props.id}`);
            const dataProducts = await resProducts.json();
            setShopProducts(dataProducts);
        })();
    }, []);

    if (shop === null) {
        return <p>Wczytywanie...</p>;
    }

    return <>
        <h2>Nazwa sklepu: {shop.name}</h2>
        <p>Kategoria: {shop.category}</p>
        {!!shop.url && <p>Adres www: <a href={shop.url}>{shop.url}</a></p>}
        <ul>
            {!!products &&
                products.map(product => (<li key={product.id}>Produkt: {product.name}, Cena: {product.price.toFixed(2)} zł.</li>))
            }
        </ul>
    </>
};