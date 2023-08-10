import { useState, useEffect } from 'react';
import './AppMapSearchResult.css'
import {
    MapContainer,
    Marker,
    TileLayer
} from 'react-leaflet'
import { useMap } from 'react-leaflet/hooks';

function MapResultChildComponent({data_query, zoom}) {
    const map = useMap();
    const center = [data_query.latitude, data_query.longitude]
    map.setView(center, zoom);
    return null;
}

export default function AppMapSearchResult({ data_query_result }) {
    const [mapCenter, setMapCenter] = useState([-27.4766, 153.0166]); // Initial center
    const [zoomLevel, setZoomLevel] = useState(13); // Initial zoom level

    useEffect(() => {
        if (data_query_result && data_query_result.latitude && data_query_result.longitude) {
            setMapCenter([data_query_result.latitude, data_query_result.longitude]);
        }
    }, [data_query_result]);

    return (
        <section className='ip_address_map__section'>
            <MapContainer id={'ip_address_map'} center={mapCenter} zoom={zoomLevel} scrollWheelZoom={false}>
                <MapResultChildComponent data_query={data_query_result} zoom={zoomLevel} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={mapCenter} >
                </Marker>
            </MapContainer>
        </section>
    );
}