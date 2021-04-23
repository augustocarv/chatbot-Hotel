import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const position: any = [-29.3349013, -49.7352188]

const HotelLocalization: React.FC = () => {
  return (
    <div id="mapid">
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Hotel Guarita! :)</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default HotelLocalization
