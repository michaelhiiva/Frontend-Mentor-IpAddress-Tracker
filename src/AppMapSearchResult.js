import './AppMapSearchResult.css'
import {
    MapContainer,
    Marker,
    TileLayer
} from 'react-leaflet'

export default function AppMapSearchResult({data}) {

    return (
        <section className='ip_address_map__section'>
            <MapContainer id={'ip_address_map'} center={[data.lat, data.lon]} zoom={15} scrollWheelZoom={false}>
            <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
                <Marker position={[data.lat, data.lon]} >
                </Marker>
            </MapContainer>
        </section>
    );
}