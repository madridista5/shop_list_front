import React, {useContext, useEffect, useState} from "react";
import {SimpleShopEntity} from 'types';

import {MapSearchForm} from "./MapSearchForm";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import './Map.css';
import '../../utils/fix-map-icon';
import {SearchContext} from "../../contexts/search.context";
import {apiUrl} from "../../config/api";
import {SingleShopView} from "./SingleShopView";

export const Map = () => {
    const {search} = useContext(SearchContext);
    const [shops, setShops] = useState<SimpleShopEntity[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/shops/${search}`);
            const data = await res.json();
            console.log(data);
            setShops(data);
        })();
    }, [search]);

    return (
        <>
            <MapSearchForm/>
            <div className="map">
                <MapContainer center={[50.4341211,16.6163938]} zoom={9}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        shops.map(shop => (
                            <Marker key={shop.id} position={[shop.lat, shop.lon]}>
                                <Popup>
                                    <SingleShopView id={shop.id}/>
                                </Popup>
                            </Marker>
                        ))
                    }
                    {/*<Marker position={[50.2657152,18.9945008]}>*/}
                    {/*    <Popup>*/}
                    {/*        <h2>It.focus</h2>*/}
                    {/*        <p>Super firma programistyczna</p>*/}
                    {/*    </Popup>*/}
                    {/*</Marker>*/}
                </MapContainer>
            </div>

        </>
    );
};