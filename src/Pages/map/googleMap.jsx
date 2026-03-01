import React, { useEffect, useRef } from 'react';

const GoogleMap = ({ apiResults, selectedPlace, onSelectPlace, onBoundsChange }) => {
  const mapRef = useRef(null);
  const googleMapRef = useRef(null);
  const markersRef = useRef([]);
  const lastResultsRef = useRef();
  const isAutoFitting = useRef(false); // Flag to distinguish between code-move and user-move

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

        const handleUserMove = () => {
          // Only notify the parent if the movement WASN'T caused by auto-fit logic
          if (!isAutoFitting.current) {
            const center = googleMapRef.current.getCenter();
            onBoundsChange({ lat: center.lat(), lng: center.lng() });
          }
        };

        googleMapRef.current.addListener("dragend", handleUserMove);
        googleMapRef.current.addListener("zoom_changed", handleUserMove);
      }
    };
    initMap();
  }, [onBoundsChange]);

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

      const resultsChanged = JSON.stringify(apiResults) !== JSON.stringify(lastResultsRef.current?.results);
      const selectionChanged = selectedPlace?.id !== lastResultsRef.current?.selectedId;

      if (resultsChanged || selectionChanged) {
        // LOCK: Start auto-fitting
        isAutoFitting.current = true;

        if (selectedPlace) {
          googleMapRef.current.setCenter(selectedPlace.location);
          googleMapRef.current.setZoom(15);
        } else if (apiResults.length > 0) {
          googleMapRef.current.fitBounds(bounds);
        }
        
        lastResultsRef.current = { results: apiResults, selectedId: selectedPlace?.id };

        // UNLOCK: Use a small timeout to ensure the map movement events finish firing 
        // before we allow user-move detections again.
        setTimeout(() => {
          isAutoFitting.current = false;
        }, 500);
      }
    };
    updateMarkers();
  }, [apiResults, selectedPlace, onSelectPlace]);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
};

export default GoogleMap;