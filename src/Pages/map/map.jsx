import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import resources from '../../data/resources.json';

function MapPage() {
  return (
    <div style={{ height: '600px', width: '100%' }}>
      <MapContainer center={[28.5383, -81.3792]} zoom={12} style={{ height: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
        {resources.map(item => (
          <Marker key={item.id} position={[item.lat, item.lng]}>
            <Popup>
              <strong>{item.name}</strong><br />
              {item.address}<br />
              Rating: {item.rating} / 5
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapPage;