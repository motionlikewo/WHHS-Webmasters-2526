import React, { useEffect, useRef } from 'react';

const GoogleMap = ({ searchTerm, selectedCategory, onResultsUpdate }) => {
  const mapRef = useRef(null);
  const googleMapRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    const initMap = async () => {
      // Check API status
      if (!window.google || !window.google.maps) return;

      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
      const { Place } = await google.maps.importLibrary("places");

      //Initalize map only once
      if (!googleMapRef.current && mapRef.current) {
        googleMapRef.current = new Map(mapRef.current, {
          center: { lat: 27.9944, lng: -81.7603 }, //Orlando area
          zoom: 7,
          mapId: "ebbd0051ea5678b560c27a1c",
          disableDefaultUI: false,
        });
      }

      const hasInput = searchTerm.trim().length > 0 || selectedCategory !== "All";

      if (hasInput) {
        // Query construction
        const categoryQuery = selectedCategory !== "All" ? selectedCategory : "";
        const fullQuery = `${categoryQuery} ${searchTerm} Florida`.trim();

        const request = {
          textQuery: fullQuery,
          fields: ["id", "displayName", "location", "formattedAddress", "rating"],
          locationBias: { lat: 27.9944, lng: -81.7603 }, // Prioritize Florida results
        };

        try {
          const { places } = await Place.searchByText(request);

          if (places && places.length > 0) {
            //Update sidebar
            onResultsUpdate(places);

            markersRef.current.forEach((marker) => (marker.map = null));
            markersRef.current = [];

            const bounds = new google.maps.LatLngBounds();

            places.forEach((place) => {
              const marker = new AdvancedMarkerElement({
                map: googleMapRef.current,
                position: place.location,
                title: place.displayName,
              });

              markersRef.current.push(marker);
              bounds.extend(place.location);
            });

            googleMapRef.current.fitBounds(bounds);
          } else {
            //Clear sidebar if no results found
            onResultsUpdate([]);
          }
        } catch (error) {
          console.error("Places API Error:", error);
        }
      } else {
        // Reset markers and search if input cleared
        markersRef.current.forEach((marker) => (marker.map = null));
        markersRef.current = [];
        onResultsUpdate([]);
        
        // Return to full view
        if (googleMapRef.current) {
          googleMapRef.current.setCenter({ lat: 27.9944, lng: -81.7603 });
          googleMapRef.current.setZoom(7);
        }
      }
    };

    initMap();
  }, [searchTerm, selectedCategory, onResultsUpdate]);

  return (
    <div 
      ref={mapRef} 
      style={{ width: '100%', height: '100%', minHeight: '400px' }} 
    />
  );
};

export default GoogleMap;