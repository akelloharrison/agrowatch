import React from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
  const farmBoundary = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];

  return (
    <div className="h-64 w-full">
      <MapContainer center={[51.505, -0.09]} zoom={13} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <Polygon positions={farmBoundary} color="blue" />
      </MapContainer>
    </div>
  );
};

export default MapView;