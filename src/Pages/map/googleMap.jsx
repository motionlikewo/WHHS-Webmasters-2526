import React, { useEffect, useRef } from 'react';

const GoogleMap = ({ searchTerm, selectedCategory, selectedPlace, onResultsUpdate, onSelectPlace }) => {
  const mapRef = useRef(null);
  const googleMapRef = useRef(null);
  const markersRef = useRef([]);
  const lastSearchRef = useRef("");

  useEffect(() => {
    const performSearch = async () => {
      if (!window.google || !window.google.maps) return;

      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
      const { Place } = await google.maps.importLibrary("places");

      if (!googleMapRef.current && mapRef.current) {
        googleMapRef.current = new Map(mapRef.current, {
          center: { lat: 27.9944, lng: -81.7603 },
          zoom: 7,
          mapId: "ebbd0051ea5678b560c27a1c",
        });
      }

      if (selectedPlace) {
        renderMarkers([selectedPlace], AdvancedMarkerElement, true);
        return;
      }

      const categoryQuery = selectedCategory !== "All" ? selectedCategory : "";
      const fullQuery = `${categoryQuery} ${searchTerm} Florida`.trim();
      const hasInput = searchTerm.trim().length > 2 || selectedCategory !== "All";

      if (!hasInput) {
        clearMarkers();
        onResultsUpdate([]);
        lastSearchRef.current = "";
        return;
      }

      if (fullQuery === lastSearchRef.current) return;

      try {
        lastSearchRef.current = fullQuery;
        
        //default request
        const request = {
          textQuery: fullQuery,
          fields: [
            "id", 
            "displayName", 
            "location", 
            "formattedAddress", 
            "rating", 
            "websiteUri", 
            "nationalPhoneNumber"
          ],
          locationBias: { lat: 27.9944, lng: -81.7603 },
        };

        const { places } = await Place.searchByText(request);

        if (places && places.length > 0) {
          onResultsUpdate(places);
          renderMarkers(places, AdvancedMarkerElement, false);
        } else {
          onResultsUpdate([]);
          clearMarkers();
        }
      } catch (error) {
        console.error("Error with Places API:", error);
        //fallback request
        if (error.message.includes("fields")) {
            console.warn("API error, Retrying with basic fields");
            try {
                const retryRequest = {
                    textQuery: fullQuery,
                    fields: ["id", "displayName", "location", "formattedAddress", "rating"],
                    locationBias: { lat: 27.9944, lng: -81.7603 },
                };
                const { places } = await Place.searchByText(retryRequest);
                onResultsUpdate(places || []);
            } catch (retryError) {
                onResultsUpdate([]);
            }
        }
      }
    };

    const renderMarkers = (placesToDisplay, AdvancedMarkerElement, isSingleView) => {
      clearMarkers();
      const bounds = new google.maps.LatLngBounds();

      placesToDisplay.forEach((place) => {
        const marker = new AdvancedMarkerElement({
          map: googleMapRef.current,
          position: place.location,
          title: place.displayName,
        });

        marker.addListener("click", () => onSelectPlace(place));
        markersRef.current.push(marker);
        bounds.extend(place.location);
      });

      if (isSingleView && placesToDisplay[0]) {
        googleMapRef.current.setCenter(placesToDisplay[0].location);
        googleMapRef.current.setZoom(15);
      } else if (placesToDisplay.length > 0) {
        googleMapRef.current.fitBounds(bounds);
      }
    };

    const clearMarkers = () => {
      markersRef.current.forEach((m) => (m.map = null));
      markersRef.current = [];
    };

    performSearch();
  }, [searchTerm, selectedCategory, selectedPlace, onResultsUpdate, onSelectPlace]);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
};

export default GoogleMap;