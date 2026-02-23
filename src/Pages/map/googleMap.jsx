import React, { useEffect, useRef } from 'react';

const GoogleMap = ({ locations }) => {
  const mapRef = useRef(null);
  const googleMapRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    // This function initializes the map using the globally loaded Google script
    const initMap = async () => {
      // Check if google maps is loaded on the window
      if (!window.google || !window.google.maps) return;

      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

      if (!googleMapRef.current && mapRef.current) {
        googleMapRef.current = new Map(mapRef.current, {
          center: { lat: 28.5383, lng: -81.3792 },
          zoom: 12,
          mapId: "ebbd0051ea5678b560c27a1c",
        });
      }

      // Standard marker rendering logic here...
      markersRef.current.forEach(m => m.map = null);
      markersRef.current = [];
      
      locations.forEach((loc) => {
        const marker = new AdvancedMarkerElement({
          map: googleMapRef.current,
          position: { lat: Number(loc.lat), lng: Number(loc.lng) },
          title: loc.name,
        });
        markersRef.current.push(marker);
      });
    };

    initMap();
  }, [locations]);

  return <div ref={mapRef} style={{ width: '100%', height: '100%', minHeight: '450px' }} />;
};

export default GoogleMap;