import React, {useContext, useEffect} from "react";

import {MapSearchForm} from "./MapSearchForm";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import './Map.css';
import '../../utils/fix-map-icon';
import {SearchContext} from "../../contexts/search.context";

export const Map = () => {
    const {search} = useContext(SearchContext);

    useEffect(() => {
        console.log('Make request to search for: ', search);
    },[search]);

    return (
        <>
            <MapSearchForm/>
            <div className="map">
                <MapContainer center={[50.4341211,16.6163938]} zoom={9} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[50.2657152,18.9945008]}>
                        <Popup>
                            <h2>It.focus</h2>
                            <p>Super firma programistyczna</p>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

        </>
    );
};