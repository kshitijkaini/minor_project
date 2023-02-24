import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap, Circle, } from 'react-leaflet';
// import { Map, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
// import L from 'leaflet'
import Locate from 'leaflet.locatecontrol';
import L from "leaflet";

function Mymaps() {
    const position = [27.655806, 85.320833];

    return (
        <>
            <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ width: '100%', height: '100vh' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                <Marker position={position}>
                    <Popup>
                        A
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    );
}



export default Mymaps;