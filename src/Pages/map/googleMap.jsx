import React, { useEffect, useRef } from 'react';

const GoogleMap = ({ apiResults, selectedPlace, onSelectPlace }) => {
  const mapRef = useRef(null);
  const googleMapRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    const initMap = async () => {
      const { Map } = await window.google.maps.importLibrary("maps");
      if (!googleMapRef.current && mapRef.current) {
        googleMapRef.current = new Map(mapRef.current, {
          center: { lat: 27.9944, lng: -81.7603 },
          zoom: 7,
          mapId: "ebbd0051ea5678b560c27a1c",
          disableDefaultUI: false,
        });
      }
    };
    initMap();
  }, []);

  useEffect(() => {
    const updateMarkers = async () => {
      if (!googleMapRef.current) return;
      const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");
      
      markersRef.current.forEach(m => { m.map = null; });
      markersRef.current = [];

      const bounds = new window.google.maps.LatLngBounds();
      const placesToDisplay = selectedPlace ? [selectedPlace] : apiResults;

      placesToDisplay.forEach((place) => {
        if (!place.location) return;
        const marker = new AdvancedMarkerElement({
          map: googleMapRef.current,
          position: place.location,
          title: place.displayName,
        });

        marker.addListener("click", () => onSelectPlace(place));
        markersRef.current.push(marker);
        bounds.extend(place.location);
      });

      if (placesToDisplay.length === 1) {
        googleMapRef.current.setCenter(placesToDisplay[0].location);
        googleMapRef.current.setZoom(15);
      } else if (placesToDisplay.length > 0) {
        googleMapRef.current.fitBounds(bounds);
      } else {
        googleMapRef.current.setCenter({ lat: 27.9944, lng: -81.7603 });
        googleMapRef.current.setZoom(7);
      }
    };
    updateMarkers();
  }, [apiResults, selectedPlace, onSelectPlace]);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
};

export default GoogleMap;