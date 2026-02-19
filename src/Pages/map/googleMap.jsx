import React, { useEffect, useRef } from 'react';
import { importLibrary, setOptions } from '@googlemaps/js-api-loader';

setOptions({
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  version: "weekly",
});

const GoogleMap = ({ locations }) => {
  const mapRef = useRef(null);
  const googleMapRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    Promise.all([
      importLibrary('maps'),
      importLibrary('marker'),
    ]).then(([ { Map }, { AdvancedMarkerElement } ]) => {
      
      // Initialization once
      if (!googleMapRef.current && mapRef.current) {
        googleMapRef.current = new Map(mapRef.current, {
          center: { lat: 28.5383, lng: -81.3792 },
          zoom: 12,
          mapId: "ebbd0051ea5678b560c27a1c",
        });
      }

      //Clear existing markers
      markersRef.current.forEach(m => m.map = null);
      markersRef.current = [];

      //Add new ones
      locations.forEach((loc) => {
        const marker = new AdvancedMarkerElement({
          map: googleMapRef.current,
          position: { lat: loc.lat, lng: loc.lng },
          title: loc.name,
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `<div style="color:black; font-family: sans-serif;">
                      <h4 style="margin:0">${loc.name}</h4>
                      <p style="margin:5px 0">${loc.address}</p>
                    </div>`,
        });

        marker.addListener("click", () => {
          infoWindow.open({
            anchor: marker,
            map: googleMapRef.current,
          });
        });

        markersRef.current.push(marker);
      });
    }).catch(e => console.error("Google Maps Error:", e));
  }, [locations]);

  return <div ref={mapRef} style={{ width: '100%', height: '100%', minHeight: '450px' }} />;
};

export default GoogleMap;